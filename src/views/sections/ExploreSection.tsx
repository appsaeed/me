
import { BsLink45deg, BsPlus, BsShare } from "solid-icons/bs";
import { For, createSignal } from "solid-js";
import { shareToSocial } from "utilies";
import { createAnimate } from "../../animation/Animator";
import Toast from "../../app/Toast";
import settings from "../../app/settings";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import projects from "../../data/projects";
import { HtmlAttr } from "../../types/dom";

export default function ExploreSection(props: HtmlAttr) {
    const [active, setActive] = createSignal("");

    return (
        <section {...props}>
            <SectionHeader text="Explore project" />
            <div class={`mx-auto w-full`}>
                <div class="flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    <For each={projects}>
                        {(world, index) => {
                            return <ExploreCard index={index()} title={world.title} imgUrl={world.image} active={active} link={world.link} setActive={setActive} />;
                        }}
                    </For>
                </div>
            </div>
        </section>
    );
}

type ExploreCardProps = {
    index: number;
    imgUrl: string;
    title: string;
    link?: string;
    active: () => string;
    setActive: (id: string) => void;
};

export function ExploreCard({ imgUrl, title, link, active, setActive, index }: ExploreCardProps) {
    return (
        <>
            <div ref={(elm) => createAnimate({ element: elm, duration: `1.${index}s` })} class={`relative  overflow-hidden flex items-center justify-center md:h-[700px] transition-[all] duration-[0.7s] cursor-pointer max-sm:h-[100px] md:flex-[0.9]`} classList={{ "max-sm:h-[60vh] md:flex-[3.0]": active() == imgUrl }} onClick={() => (active() == imgUrl ? setActive("") : setActive(imgUrl))}>
                <Image src={imgUrl} alt={title} class="absolute w-full h-full object-cover rounded-[24px]" />
                {active() !== imgUrl && <h1 class=" font-semibold sm:text-[26px] text-[18px] dark:text-white absolute md:rotate-[-90deg] md:text-ellipsis md:whitespace-nowrap">{title}</h1>}

                <div class={`absolute bottom-0 p-8 flex justify-start w-full flex-col h-[10rem] bg-[rgba(0,0,0,0.7)] rounded-b-[24px] transition-[all] duration-[0.7s] opacity-0`} classList={{ "opacity-100": active() == imgUrl }}>
                    <div class="flex justify-around">
                        <a target="_blank" href={imgUrl} class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle">
                            <BsPlus role="img" aria-label={title} class="w-full text-4xl mx-auto" />
                        </a>
                        <a target="_blank" href={link} class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle" data-tollpit>
                            <BsLink45deg role="img" aria-label={title} class="w-full text-4xl mx-auto" />
                        </a>

                        <div
                            class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle"
                            onClick={() => {
                                const error = shareToSocial({
                                    title: settings.name,
                                    url: `${link}`,
                                });
                                if (error) Toast.fire("faild: can not share", error.message, "error");
                            }}
                        >
                            <BsShare role="img" aria-label={title} class="w-full text-4xl mx-auto" />
                        </div>
                    </div>
                    <div class=" text-2xl text-center mt-4">{title}</div>
                </div>
            </div>
        </>
    );
}
