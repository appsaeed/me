import { FiCheck } from "solid-icons/fi";
import { For } from "solid-js";
import img_robot from "../../assets/images/robot.png";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";

const item_list = [
  "Artificial intelligence intregate into your website",
  `Uses OpenAI on your new website or exiting!`,
  "Image and video generate useing AI tools and APIs",
  "Emails, Templates, blogs, contents generate useing AI",
];

import Animate from "../../animation";
import { cn } from "../../app/utilies";
import { HtmlAttr, SpanAttr } from "../../types/dom";
const Listitem = (props: SpanAttr & { index: number }) => {
  return (
    <Animate.div
      duration={`1.${props.index}s`}
      motion="slideInLeft"
      class="flex my-6"
    >
      <div class="w-8 h-8 p-1 bg-slate-600 rounded-full">
        <FiCheck class=" text-2xl mx-auto text-green-400" />
      </div>
      <span
        {...props}
        class="dark:text-slate-100 ml-3 font-normal leading-[30.8px]"
      >
        {props.children}
      </span>
    </Animate.div>
  );
};
export default function AISections(props: HtmlAttr) {
  return (
    <section
      class={cn("px-[0!important] mx-[0!important]", props.class)}
      {...props}
    >
      <SectionHeader>Artificial intelligence</SectionHeader>
      <div class={`grid grid-cols-1 sm:grid-cols-2`}>
        <div class={`${props.class} border-0 mb-6 max-sm:order-2`}>
          <Animate.h1 motion="slideInDown" class="dark:text-white text-2xl ">
            The Next Generation Web Unleashing the Power of AI
          </Animate.h1>
          <Animate.p motion="slideInLeft" class={`mt-5 font-light text-base`}>
            I am an expert in using and implementing AI and modern technology to
            make better and faster most likely to fit your needs. I am able to
            make AI tools and web applications using their APIs and so on.
          </Animate.p>
          <For each={item_list}>
            {(item, index) => {
              return (
                <Listitem
                  index={index()}
                  ref={(span) => {
                    span.innerHTML = String(item);
                  }}
                />
              );
            }}
          </For>
        </div>

        <Animate.div motion="slideInRight" class={`w-full`}>
          <Image src={img_robot} />
        </Animate.div>
      </div>
    </section>
  );
}
