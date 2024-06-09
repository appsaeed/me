import { BsWhatsapp } from "solid-icons/bs";
import { FiPhone } from "solid-icons/fi";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { isMail } from "utilies";
import Animate from "../../animation";
import Toast from "../../app/Toast";
import { cn } from "../../app/utilies";
import img_support from "../../assets/images/support-animate.svg";
import Image from "../../components/Image";
import InputwithLabel from "../../components/InputwithLabel";
import SectionHeader from "../../components/SectionHeader";
import TextareaWithLabel from "../../components/TextareaWithLabel";
import { HtmlAttr } from "../../types/dom";
import { FormEvent } from "../../types/event";

interface FormFields {
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection(props: HtmlAttr) {
  const [loading, setLoading] = createSignal(false);
  const [form, setForm] = createStore<FormFields>({
    email: "",
    subject: "",
    message: "",
  });

  const setData = (name: keyof typeof form, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!isMail(form.email)) {
      Toast.fire("sorry", "please enter valid email", "error");
      setLoading(false);
      return false;
    } else if (form.message?.length < 3) {
      Toast.fire("sorry", "please write  message", "error");
      setLoading(false);
      return false;
    }

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${import.meta.env.VITE_API_TOKEN}`);


    const raw = JSON.stringify({
      "to": form.email,
      "message": form.message,
      "subject": form.subject
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("https://saastask.onrender.com/api/v3/send-email", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 'success') {
          Toast.fire('Success', 'Successfull Email was sent', 'success')
        } else {
          Toast.fire('Server Error', response?.message, 'error')
        }
      })
      .catch((error) => Toast.fire('Sothing wrong!', error.message, 'error'))
      .finally(() => setLoading(false));


  };
  return (
    <section {...props}>
      <SectionHeader>Contact Me </SectionHeader>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        {/* secound part */}
        <Animate.div motion="slideInLeft" class="mx-auto">
          <Image class="w-full h-full" src={img_support} />
        </Animate.div>

        {/* form/ */}
        <Animate.div
          motion="slideInRight"
          class="p-8 dark:bg-gray-700 bg-slate-100 shadow-2xl rounded-2xl h-max"
        >
          <p class="text-xl uppercase tracking-wider">Get in touch</p>
          <div class="my-4 text-1xl">
            <a
              href="mailto:appsaeed7@gmail.com"
              target="_blank"
              class="flex gap-2 my-2"
            >
              {/* <FiMail class="mt-1 text-[#ff2e00]" /> <span>appsaeed7@gmail.com</span> */}
              <Image
                height={"20px"}
                width={"20px"}
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                alt=""
                srcset=""
              />{" "}
              <span>appsaeed7@gmail.com</span>
            </a>
            <a
              href="tel:+8801780861887"
              target="_blank"
              class="flex gap-2 my-2 text-[]"
            >
              <FiPhone class="mt-1 text-[green]" /> <span>+8801780861887</span>
            </a>
            <a
              href="https://wa.me/+8801780861887"
              target="_blank"
              class="flex gap-2 my-2"
            >
              <BsWhatsapp class="mt-1 text-[#25d366]" />{" "}
              <span>+8801780861887</span>
            </a>
          </div>
          <form
            class="mt-10 flex flex-col gap-4"
            onSubmit={(e) => formHandler(e)}
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputwithLabel
                name="email"
                type="email"
                label="What's Your email addrss"
                placeholder="What's your email"
                value={form.email}
                oninput={(e) => setData("email", e.target.value)}
              />
              <InputwithLabel
                name="subject"
                label="Tell us any fact 🤷"
                placeholder="Tell us a resone"
                value={form.subject}
                oninput={(e) => setData("subject", e.target.value)}
              />
            </div>

            <TextareaWithLabel
              label="😃 Say Something Fun & Important! 🚀"
              placeholder="Write here..."
              value={form.message}
              oninput={(e) => setData("message", e.target.value)}
            />

            <button
              disabled={loading()}
              type="submit"
              class={cn("text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center", {
                "cursor-not-allowed": loading()
              })}
            >
              {loading() ? <>
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </> : "Send message 🚀"}
            </button>
          </form>
        </Animate.div>
      </div>
    </section>
  );
}
