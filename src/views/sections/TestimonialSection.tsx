import { For } from 'solid-js'
import SectionHeader from '../../components/SectionHeader'

import Feedback from '../../components/Feedback'
import fiverrReviews from '../../data/fiverr-reviews'
import { HtmlAttr } from '../../types/dom'

export default function TestimonialSection(props: HtmlAttr) {
  const reviews = fiverrReviews.slice(0, 12)
  return (
    <section {...props}>
      <SectionHeader>Testimonials</SectionHeader>
      <div class="">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <For each={reviews}>
            {(review, index) => {
              return (
                <Feedback
                  index={index()}
                  name={review.name}
                  stars={review.stars}
                  message={review.description}
                  profile={review.profile_img}
                  country_name={review.country_name}
                />
              )
            }}
          </For>
        </div>
      </div>
    </section>
  )
}
