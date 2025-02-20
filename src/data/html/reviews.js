import $ from 'jquery';

// Check if jQuery is loaded
if (typeof jQuery === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // URL of the jQuery version you need
    script.onload = function() {
        runReviewScript(); // Run your script once jQuery is loaded
    };
    document.head.appendChild(script);
} else {
    runReviewScript(); // If jQuery is already loaded, run the script
}

function runReviewScript() {
    const reviews = [];

    $('.freelancer-review-item-wrapper').each(function() {
        const name = $(this).find('p.d1hltpk._1554sdp1f9._1554sdp1cr._1554sdp8._1554sdp2').text();
        const profile_img = $(this).find('[alt="image-docs"]').attr('src');
        const work_sample = $(this).find('[alt="Worksample image"]').attr('src');
        const country_name = $(this).find('.country').find('p').text();
        const country_flag = $(this).find('.country-flag').attr('src');
        const country_code = $(this).find('.country-flag').attr('alt');

        const stars = $(this).find('.rating-score').text();
        const times = $(this).find('time').text();
        const description = $(this).find('.review-description p').text();

        const review = { name, profile_img, work_sample, country_name, country_flag, country_code, stars, times, description };
        reviews.push(review);
    });

    console.log(reviews);
}
