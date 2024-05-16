import settings from "../app/settings";
import SectionHeader from "../components/SectionHeader";
import sections from "../data/classNames/sections";
import BlogWrapper from "../views/layout/BlogWrapper";
import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";

export default function Termandconditions() {
  return (
    <>
      <Navbar />
      <section class={`${sections.common}`}>
        <SectionHeader>Terms & Conditions</SectionHeader>
        <BlogWrapper>
          <h1 class="text-4xl mb-4">Terms & Conditions for {settings.name}</h1>
          <ul class="space-y-2 text-gray-800 list-disc list-inside dark:text-gray-300">
            <li>The application , text, images, graphics, video, script, and audio, including any other information, content, material, all of which are contained in the Application, Website, and services and products, are our own proprietary property.</li>
            <li>Download of our class content videos is strongly prohibited. You can download other files for your personal practice excepting class content videos. </li>
            <li>You may not share your account information’s, email, and password with another.Our website is not allow you for one enroll the share with multiple. </li>
            <li>You may not copy our course syllabus, study plans, resources, and files for other commercial uses.&nbsp;</li>
            <li>You may not copy, modify, translate, display, distribute, or perform any information or software obtained from the Application </li>
            <li>You are prohibited from using this application, our website, and our products and services for commercial purposes, including but not limited to selling, advertising, or promoting the application or any of our products or services, asking for contributions or donations, or using public forums for commercial purposes.</li>
            <li>You may not use the application or access the website in any way that could harm, overload, or crash any of the applications or website's servers or networks</li>
            <li>It is prohibited to threatening, stalking, and/or harassing another person, as well as inciting another person to conduct violence. </li>
            <li>You may not spread harassing or insulting information about this website, using social media, blog, newspaper or any media. </li>
            <li>You cannot use any of our class video clips portion, screen shots or any other resources from this website for create cyberbullying, create social media memes , or any other activities that is go against our reputation and services&nbsp;&nbsp;</li>
            <li>Do not transmit, share, or otherwise make available any material that has viruses, trojans, worms, spyware, time bombs, cancelbots, or other computer programming routines, code, files, or programs that could harm the application/services, interests, or rights of other users, or limit the functionality of any computer software, hardware, or telecommunications; </li>
          </ul>
        </BlogWrapper>
      </section>
      <Footer />
    </>
  );
}
