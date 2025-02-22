import { createSignal, For, JSX } from 'solid-js'
import SectionHeader from '../../components/SectionHeader'

import Animate from '../../animation'
import reviews from '../../api/reviews.json'
import ButtonGradient from '../../components/buttons/ButtonGradient'
import Feedback from '../../components/Feedback'

type ReviewSectionInterface = JSX.HTMLAttributes<HTMLElement> & {
  chunkSize?: number;
}

export default function TestimonialSection({ chunkSize = 9, ...props }: ReviewSectionInterface) {

  const [items, setItems] = createSignal(reviews.slice(0, chunkSize));
  const [isLoading, setIsLoading] = createSignal(false);

  const loadMore = () => {
    if (isLoading()) return; // Prevent multiple clicks
    setIsLoading(true); // Show loading state

    const nextBatch = reviews.slice(0, items().length + chunkSize);

    // Simulating API delay
    setTimeout(() => {
      setItems(nextBatch);
      setIsLoading(false); // Hide loading state after fetching
    }, 1000);
  };


  return (
    <section {...props}>
      <SectionHeader>Fiverr buyer's reviews</SectionHeader>
      <div class="">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <For each={items()}>
            {(review, index) => {
              return (
                <Feedback
                  index={index()}
                  name={review.username}
                  stars={review.value}
                  message={review.comment}
                  profile={review.user_image_url}
                  country_name={review.reviewer_country}
                  package_id={review.gig_id}
                />
              )
            }}
          </For>
        </div>
      </div>
      {/* Load More Button */}
      <div class="w-full flex justify-center mt-6">
        {items().length < reviews.length && (
          <Animate.button motion="slideInUp" onClick={loadMore} disabled={isLoading()}>
            <ButtonGradient class="text-white flex items-center justify-center gap-2 px-6 py-2">
              {isLoading() ? (
                <>
                  <span class="animate-spin border-2 border-t-transparent border-white rounded-full w-5 h-5"></span>
                  Loading...
                </>
              ) : (
                'See more'
              )}
            </ButtonGradient>
          </Animate.button>
        )}
      </div>
    </section>
  )
}
