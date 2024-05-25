import { FiMapPin, FiShoppingBag } from "solid-icons/fi";
import { For, createSignal, onMount } from "solid-js";
import Animate from "../../animation";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";

import { avatar } from "utilies";
import { Review, testimonials } from "../../data/testimonials";
import { HtmlAttr } from "../../types/dom";

type ItemProps = Review & { index: number };
function ListItem({
  comment,
  user_image_url,
  index,
  reviewer_country,
  username,
  gig_slug,
  ...params
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
            src={user_image_url ? user_image_url : avatar(username.slice(0, 2))}
            alt={`Feedback by ${username}`}
            class="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <a
          // href={`https://www.fiverr.com/appsaeed/${gig_slug}`}
          href={`mailto:appsaeed@gmail.com?subject=Send me the Package -  ${params.gig_id}`}
          class="flex link gap-1"
          target="_blank"
        >
          <FiShoppingBag class="text-xl" /> package
        </a>
        <div class="flex gap-1">
          <FiMapPin class="text-xl" />
          {reviewer_country}
        </div>
      </div>
      <div class="">
        <p
          class="dark:text-white tracking-wider text-[16px] overflow-hidden text-ellipsis line-clamp-2 cursor-pointer"
          onclick={(e) => e.target.classList.toggle("line-clamp-2")}
        >
          {comment}
        </p>
      </div>
    </Animate.div>
  );
}

export default function TestimonialSection(props: HtmlAttr) {
  const [reviews, setReviews] = createSignal<Review[]>(testimonials);
  onMount(() => {
    setReviews(reviews().filter((_v, i) => i < 6));
  });
  return (
    <section {...props} class={`${props.class} `}>
      <SectionHeader>Testimonials</SectionHeader>
      <div class="">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <For each={reviews()}>
            {(review, index) => {
              return <ListItem index={index()} {...review} />;
            }}
          </For>
        </div>
      </div>
    </section>
  );
}
