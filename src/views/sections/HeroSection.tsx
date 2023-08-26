import { onCleanup, onMount } from "solid-js";
//@ts-ignore
import Typed from "typed.js";
import Animate from "../../animation";
import text_hero_section from "../../data/content/text_hero_section";
import { HtmlAttr } from "../../types/dom";
import { loadImage } from "../../utils/load";

export default function (props: HtmlAttr) {
  let typeElm: HTMLParagraphElement | undefined;
  onMount(() => {
    let _typed: Typed;
    if (typeElm) {
      _typed = new Typed(typeElm, {
        strings: text_hero_section.typeing,
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: false,
      });
    }
    onCleanup(() => {
      _typed?.destroy();
      _typed = null;
    });
  });

  const imageSrc =
    "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80";

  return (
    <section
      ref={(hero) => {
        loadImage(imageSrc).then(() => {
          hero.classList.remove("bg-blurr");
          hero.setAttribute("style", `background-image: url(${imageSrc});`);
        });
      }}
      {...props}
      class={`bg-blurr bg-cover bg-left-top px-10 bg-fixed`}
    >
      <div class="w-full mx-auto text-center pt-28 pb-16">
        <Animate.h1
          motion="slideInDown"
          class="mb-20 text-4xl font-extrabold  text-gray-900 dark:text-slate-300"
        >
          I'm <span class=" font-bold text-6xl">Saeed</span> Hossen
        </Animate.h1>
        <Animate.h2
          motion="slideInUp"
          class="mb-20 text-4xl font-extrabold  text-gray-900  dark:text-white h-10"
        >
          <p id="typing" ref={typeElm}>
            {text_hero_section?.typeing[0]}
          </p>
        </Animate.h2>

        <Animate.h2
          motion="slideInUp"
          class="mb-20 text-xl  text-gray-900 dark:text-slate-300"
        >
          Create your website and web application for growing your worth over online in
          world.
        </Animate.h2>

        <Animate.button
          motion="slideInUp"
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2"
        >
          Get Started
        </Animate.button>
      </div>
    </section>
  );
}
