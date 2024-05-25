import { JSX } from "solid-js";

export default function ExprienceSection(
  props: JSX.HTMLAttributes<HTMLElement>
) {
  return (
    <section {...props}>
      <span class="hash-span" id="work">
        &nbsp;
      </span>
      <div style="opacity: 1; transform: none;">
        <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </div>
      <div class="mt-20 flex flex-col">
        <div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          <div id="" class="vertical-timeline-element">
            <span
              class="vertical-timeline-element-icon bounce-in"
              style="background: rgb(56, 62, 86);"
            >
              <div class="flex justify-center items-center w-full h-full">
                <img
                  src="/src/assets/company/starbucks.png"
                  alt="Starbucks"
                  class="w-[60%] h-[60%] object-contain"
                />
              </div>
            </span>
            <div
              class="vertical-timeline-element-content bounce-in"
              style="background: rgb(29, 24, 54); color: rgb(255, 255, 255);"
            >
              <div
                class="vertical-timeline-element-content-arrow"
                style="border-right: 7px solid rgb(35, 38, 49);"
              ></div>
              <div>
                <h3 class="text-white text-[24px] font-bold">
                  React.js Developer
                </h3>
                <p
                  class="text-secondary text-[16px] font-semibold"
                  style="margin: 0px;"
                >
                  Starbucks
                </p>
              </div>
              <ul class="mt-5 list-disc ml-5 space-y-2">
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Developing and maintaining web applications using React.js and
                  other related technologies.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Implementing responsive design and ensuring cross-browser
                  compatibility.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Participating in code reviews and providing constructive
                  feedback to other developers.
                </li>
              </ul>
              <span class="vertical-timeline-element-date">
                March 2020 - April 2021
              </span>
            </div>
          </div>
          <div id="" class="vertical-timeline-element">
            <span
              class="vertical-timeline-element-icon bounce-in"
              style="background: rgb(230, 222, 221);"
            >
              <div class="flex justify-center items-center w-full h-full">
                <img
                  src="/src/assets/company/tesla.png"
                  alt="Tesla"
                  class="w-[60%] h-[60%] object-contain"
                />
              </div>
            </span>
            <div
              class="vertical-timeline-element-content bounce-in"
              style="background: rgb(29, 24, 54); color: rgb(255, 255, 255);"
            >
              <div
                class="vertical-timeline-element-content-arrow"
                style="border-right: 7px solid rgb(35, 38, 49);"
              ></div>
              <div>
                <h3 class="text-white text-[24px] font-bold">
                  React Native Developer
                </h3>
                <p
                  class="text-secondary text-[16px] font-semibold"
                  style="margin: 0px;"
                >
                  Tesla
                </p>
              </div>
              <ul class="mt-5 list-disc ml-5 space-y-2">
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Developing and maintaining web applications using React.js and
                  other related technologies.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Implementing responsive design and ensuring cross-browser
                  compatibility.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Participating in code reviews and providing constructive
                  feedback to other developers.
                </li>
              </ul>
              <span class="vertical-timeline-element-date">
                Jan 2021 - Feb 2022
              </span>
            </div>
          </div>
          <div id="" class="vertical-timeline-element">
            <span
              class="vertical-timeline-element-icon bounce-in"
              style="background: rgb(56, 62, 86);"
            >
              <div class="flex justify-center items-center w-full h-full">
                <img
                  src="/src/assets/company/shopify.png"
                  alt="Shopify"
                  class="w-[60%] h-[60%] object-contain"
                />
              </div>
            </span>
            <div
              class="vertical-timeline-element-content bounce-in"
              style="background: rgb(29, 24, 54); color: rgb(255, 255, 255);"
            >
              <div
                class="vertical-timeline-element-content-arrow"
                style="border-right: 7px solid rgb(35, 38, 49);"
              ></div>
              <div>
                <h3 class="text-white text-[24px] font-bold">Web Developer</h3>
                <p
                  class="text-secondary text-[16px] font-semibold"
                  style="margin: 0px;"
                >
                  Shopify
                </p>
              </div>
              <ul class="mt-5 list-disc ml-5 space-y-2">
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Developing and maintaining web applications using React.js and
                  other related technologies.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Implementing responsive design and ensuring cross-browser
                  compatibility.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Participating in code reviews and providing constructive
                  feedback to other developers.
                </li>
              </ul>
              <span class="vertical-timeline-element-date">
                Jan 2022 - Jan 2023
              </span>
            </div>
          </div>
          <div id="" class="vertical-timeline-element">
            <span
              class="vertical-timeline-element-icon bounce-in"
              style="background: rgb(230, 222, 221);"
            >
              <div class="flex justify-center items-center w-full h-full">
                <img
                  src="/src/assets/company/meta.png"
                  alt="Meta"
                  class="w-[60%] h-[60%] object-contain"
                />
              </div>
            </span>
            <div
              class="vertical-timeline-element-content bounce-in"
              style="background: rgb(29, 24, 54); color: rgb(255, 255, 255);"
            >
              <div
                class="vertical-timeline-element-content-arrow"
                style="border-right: 7px solid rgb(35, 38, 49);"
              ></div>
              <div>
                <h3 class="text-white text-[24px] font-bold">
                  Full stack Developer
                </h3>
                <p
                  class="text-secondary text-[16px] font-semibold"
                  style="margin: 0px;"
                >
                  Meta
                </p>
              </div>
              <ul class="mt-5 list-disc ml-5 space-y-2">
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Developing and maintaining web applications using React.js and
                  other related technologies.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Implementing responsive design and ensuring cross-browser
                  compatibility.
                </li>
                <li class="text-white-100 text-[14px] pl-1 tracking-wider">
                  Participating in code reviews and providing constructive
                  feedback to other developers.
                </li>
              </ul>
              <span class="vertical-timeline-element-date">
                Jan 2023 - Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
