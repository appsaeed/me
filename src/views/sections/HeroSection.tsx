import { FiDownload } from "solid-icons/fi";
//@ts-ignore
import { onCleanup, onMount } from "solid-js";
import Animate from "../../animation";
import { createAnimateStyle } from "../../animation/Animator";
import { AnimationMotion } from "../../animation/type";
import { cn } from "../../app/utilies";
import { HtmlAttr } from "../../types/dom";

export default function ({ class: className, ...props }: HtmlAttr) {
  let slides: HTMLParagraphElement | undefined;

  onMount(() => {
    if (slides) {
      const timer = 8000;
      const children = [...slides.children];
      const animateName: AnimationMotion = "bounceInOutUp";
      const duration = `${timer}ms`;

      function hideChildren(child: Element) {
        const style = child.getAttribute("style") || "";
        child.setAttribute("style", `visibility:hidden; ${style}`);
      }
      children.forEach(hideChildren);

      function slideShow(
        animate: AnimationMotion,
        elm: Element | undefined | null
      ) {
        if (elm && elm?.tagName) {
          const getStyle =
            elm.getAttribute("style")?.replace("visibility:hidden;", "") || "";
          const animateStyle = createAnimateStyle(animate, duration);
          elm.setAttribute("style", getStyle + animateStyle);
          elm.setAttribute("data-animate", "true");
        }
      }

      function slideHide(elm: Element | undefined | null) {
        if (elm && elm?.tagName) {
          elm.setAttribute("style", `visibility:hidden;`);
          elm.setAttribute("data-animate", "false");
        }
      }

      slideShow(animateName, children[0]);

      const interval = setInterval(() => {
        const animateElm = document.querySelector('[data-animate="true"]');
        slideHide(animateElm);
        slideShow(animateName, animateElm?.nextElementSibling || children[0]);
      }, timer);

      onCleanup(() => {
        clearTimeout(interval);
      });
    }
  });

  return (
    <section
      class={cn(`px-10 overflow-hidden pattern-circle dark:pattern-circle  bg-fixed dark:bg-fixed  max-w-fit`,
      )}
      {...props}
    >
      <div class="w-full mx-auto text-center pt-28 pb-16">
        <Animate.h1 motion="slideInDown" duration={'1.5s'} class="mb-20 text-3xl font-extrabold   text-slate-300">
          I'm <span class=" font-bold text-6xl">Saeed</span> Hossen
        </Animate.h1>

        <Animate.h2
          motion="slideInUp"
          class="mb-20 text-3xl text-white dark:text-white"
        >
          Full-stack developer with expertise in JavaScript, Nodejs, PHP, Laravel, ReactJS,
          AI, and TailwindCSS. Building modern web applications & also focusing
          on API.
          <br />
          <b>Open to new opportunities!</b>
        </Animate.h2>

        <Animate.a
          href="https://raw.githubusercontent.com/appsaeed/assets/main/me/saeed-hossen-resume.pdf"
          download={"saeed-hossen-resume"}
          motion="slideInUp"
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2"
        >
          <FiDownload style={{ display: "inline" }} /> Download Resume
        </Animate.a>

        <div
          ref={slides}
          class="relative w-full mb-20 text-4xl font-extrabold  text-white h-10"
        >
          <p class="absolute top-full left-0 right-0">
            Full-Stack web development
          </p>
          <p class="absolute top-full left-0 right-0">Laravel Application</p>
          <p class="absolute top-full left-0 right-0">Frontend Framework</p>
          <p class="absolute top-full left-0 right-0">TailwindCSS | RectJS</p>
          <p class="absolute top-full left-0 right-0">
            Artificial intelligence
          </p>
          <p class="absolute top-full left-0 right-0">Datebase & REST API</p>
          <p class="absolute top-full left-0 right-0">NodeJS Application</p>
        </div>
      </div>
    </section>
  );
}
