import SectionHeader from "../components/SectionHeader";
import sections from "../data/classNames/sections";
import BlogWrapper from "../views/layout/BlogWrapper";
import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";

export default function License() {
    return (
        <>
            <Navbar />
            <section class={`${sections.common}`}>
                <SectionHeader text="License" />
                <BlogWrapper>
                    MIT License
                    <br />
                    <br />
                    Copyright (c) 2023 Saeed Hossen
                    <br />
                    <br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    <br />
                    <br />
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    <br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </BlogWrapper>
            </section>
            <Footer />
        </>
    );
}
