import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";
import TestimonialSection from "../views/sections/TestimonialSection";

export default function ReviewsPage() {
    const container = "px-4 py-20 border-light sm:px-20";

    return (
        <>
            <Navbar />
            <TestimonialSection class={container} id="reviews" chunkSize={27} />
            <Footer />
        </>
    );
}
