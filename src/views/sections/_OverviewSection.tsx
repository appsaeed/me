import { JSX } from "solid-js";
import sections from "../../data/classNames/sections";

export default function OverviewSection(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section class={`${sections.common} ${props.class}`} {...props}>
      <span class="hash-span" id="about">
        &nbsp;
      </span>
      <div style="opacity: 1; transform: none;">
        <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </div>
      <p
        class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        style="opacity: 1; transform: none;"
      >
        I'm a skilled software developer with experience in TypeScript and JavaScript, and
        expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring your ideas
        to life!
      </p>
      <div class="mt-20 flex flex-wrap gap-10">
        <div
          class="xs:w-[250px] w-full"
          style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
        >
          <div
            class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style="opacity: 1; transform: none;"
          >
            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src="/src/assets/web.png"
                alt="web-development"
                class="w-16 h-16 object-contain"
              />
              <h3 class="text-white text-[20px] font-bold text-center">Web Developer</h3>
            </div>
          </div>
        </div>
        <div
          class="xs:w-[250px] w-full"
          style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
        >
          <div
            class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style="opacity: 1; transform: none;"
          >
            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src="/src/assets/mobile.png"
                alt="web-development"
                class="w-16 h-16 object-contain"
              />
              <h3 class="text-white text-[20px] font-bold text-center">
                React Native Developer
              </h3>
            </div>
          </div>
        </div>
        <div
          class="xs:w-[250px] w-full"
          style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
        >
          <div
            class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style="opacity: 1; transform: none;"
          >
            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src="/src/assets/backend.png"
                alt="web-development"
                class="w-16 h-16 object-contain"
              />
              <h3 class="text-white text-[20px] font-bold text-center">
                Backend Developer
              </h3>
            </div>
          </div>
        </div>
        <div class="xs:w-[250px] w-full">
          <div
            class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style="opacity: 1; transform: none;"
          >
            <div class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img
                src="/src/assets/creator.png"
                alt="web-development"
                class="w-16 h-16 object-contain"
              />
              <h3 class="text-white text-[20px] font-bold text-center">
                Content Creator
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
