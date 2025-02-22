import { FiMapPin, FiShoppingBag } from "solid-icons/fi";
import { avatar } from "utilies";
import Animate from "../animation";
import Image from "./Image";

type ItemProps = {
    name: string,
    profile?: string | null,
    index: number,
    stars: string | number,
    message?: string,
    country_name?: string;
    package_id?: string | number
}
export default function Feedback({
    name,
    profile,
    index,
    message,
    country_name,
    package_id
}: ItemProps) {
    return (
        <Animate.div
            duration={`1.${index}s`}
            motion="slideInUp"
            class="dark:bg-slate-700 shadow-2xl bg-slate-100  p-6 rounded-2xl w-full"
        >
            <div class="flex justify-between gap-6 mb-6">
                <div class="w-8 h-8">
                    <Image
                        src={profile ?? avatar(name.slice(0, 2))}
                        alt={`Feedback by ${name}`}
                        class="w-8 h-8 rounded-full object-cover"
                    />
                </div>
                <a
                    // href={`https://www.fiverr.com/appsaeed/${gig_slug}`}
                    href={`mailto:appsaeed@gmail.com?subject=Send me the Package -  ${package_id}`}
                    class="flex link gap-1"
                    target="_blank"
                >
                    <FiShoppingBag class="text-xl" /> package
                </a>
                <div class="flex gap-1">
                    <FiMapPin class="text-xl" />
                    {country_name}
                </div>
            </div>
            <div class="">
                <p
                    class="dark:text-white tracking-wider text-[16px] overflow-hidden text-ellipsis line-clamp-2 cursor-pointer"
                    onclick={(e) => e.target.classList.toggle("line-clamp-2")}
                >
                    {message}
                </p>
            </div>
        </Animate.div>
    );
}