import { For } from "solid-js";
import Animate from "../../animation";

import { Link } from "@solidjs/router";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import ButtonGradient from "../../components/buttons/ButtonGradient";
import business from "../../data/business";
import { HtmlAttr } from "../../types/dom";

type Business = { index: number } & (typeof business)[number];

function BusinessCard({ icon, title, content, index }: Business) {
  return (
    <Animate.div
      motion="slideInRight"
      duration={`1.${index}s`}
      class="flex flex-row p-6 rounded-[20px] mb-6 dark:hover:bg-slate-900 hover:bg-slate-100"
    >
      <div class=" w-12 h-12 rounded-full p-3 flex justify-center items-center bg-dimBlue">
        <Image src={icon} alt={title} class="w-full h-full object-contain" />
      </div>
      <div class="flex-1 flex flex-col ml-3">
        <h1 class="font-semibold dark:text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h1>
        <p class="font-light dark:text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </Animate.div>
  );
}

export default function BusinessSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <SectionHeader>Business and project</SectionHeader>
      <div class="flex md:flex-row flex-col">
        <div class="flex-1 flex  flex-col">
          <Animate.h2
            motion="slideInLeft"
            class="font-semibold text-4xl dark:text-white w-full mb-4"
          >
            You do the business, we’ll handle the project.
          </Animate.h2>
          <Animate.p
            motion="slideInLeft"
            class="font-light text-[16px] dark:text-slate-200 my-5"
          >
            In the world of web development, where innovation and functionality
            intersect, businesses strive to create digital experiences that
            captivate audiences and drive growth. Amidst this pursuit, the adage
            "You Do the Business, We'll Handle the Project" resonates
            profoundly. This philosophy acknowledges the importance of seamless
            project management as the backbone of successful web development,
            enabling businesses to concentrate on their core strategies while
            experts manage the intricacies of project execution.
            <br />
            <br />
            Navigating the Complexities of Web Development
            <br />
            Web development is a multifaceted process encompassing design,
            coding, content creation, testing, and deployment. The complexities
            involved require dedicated expertise and meticulous planning to
            ensure projects are executed effectively and efficiently.
            <br />
            <br />
            Delegating Project Management: A Strategic Advantage
            <br />
            Embracing the philosophy of "You Do the Business, We'll Handle the
            Project" in the realm of web development offers several strategic
            advantages:
          </Animate.p>
          <Animate.button motion="slideInDown" class="flex gap-5">
            <ButtonGradient class="text-white">
              <Link href="/contact">Get Starting</Link>
            </ButtonGradient>
          </Animate.button>
        </div>

        {/* item  */}
        <div class="flex-1 flex justify-center items-center md:mt-0 mt-10 relative flex-col">
          <For each={business}>
            {(item, index) => {
              return <BusinessCard index={index()} {...item} />;
            }}
          </For>
        </div>
      </div>
    </section>
  );
}
