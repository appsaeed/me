import { For, createSignal, onCleanup, onMount } from "solid-js";
import Animate from "../../animation";
import developerActivitySvg from "../../assets/developer-activity.svg";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import skils from "../../data/skils";
import { HtmlAttr } from "../../types/dom";

export default function SkilSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <SectionHeader>Web frameworks & programming Skils</SectionHeader>
      <div class={`grid grid-cols-1 sm:grid-cols-2`}>
        <div class="w-full">
          <Animate.div motion="slideInLeft">
            <Image src={developerActivitySvg} />
          </Animate.div>
        </div>
        <div class="">
          <For each={skils}>
            {(skil, index) => (
              <Knowlage
                index={index()}
                {...skil}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

type KnowlagePrps = {
  index?: number;
  name: string;
  image: string;
  percent: number;
  link?: string;
};

export function Knowlage({ name, image: icon, percent, index }: KnowlagePrps) {
  let element: HTMLDivElement | undefined;
  const [count, setCount] = createSignal(0);
  onMount(() => {
    let timer: NodeJS.Timeout | undefined;
    function process() {
      const interval = 60; // Interval for updating the progress
      const steps = Number(`${percent}00`) / interval; // Number of steps in the progress

      let currentProgress = 0;
      const increment = 100 / steps;

      function updateProgress() {
        currentProgress += increment;
        setCount(Math.round(currentProgress));
        if (currentProgress < percent) {
          timer = setTimeout(updateProgress, interval);
        }
      }
      updateProgress();
      return currentProgress;
    }
    //create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          process();
          observer.unobserve(entry.target);
          observer.disconnect();
        }
      });
    });

    observer.observe(element as Element);

    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
      timer = undefined;
    });
  });
  return (
    <Animate.div
      duration={`1.${index}s`}
      motion="slideInRight"
      class="flex gap-4 m-3 pb-4"
    >
      <div class="flex-auto w-12 cursor-pointer">
        <Image
          class="w-10 h-10 p-1 hover:p-0 transition-all rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={icon}
          alt="Javasript"
        />
      </div>
      <div class="flex-auto w-full">
        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-blue-700s dark:text-whites">{name}</span>
          <span class="counter text-sm font-medium text-blue-700 dark:text-white">
            {count()}%
          </span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2 dark:bg-gray-700">
          <div
            class="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${count()}%` }}
            ref={element}
          ></div>
        </div>
      </div>
    </Animate.div>
  );
}
