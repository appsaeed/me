import assets from "../../assets/s";
import Image from "../../components/Image";
import ButtonGradient from "../../components/buttons/ButtonGradient";
import { HtmlAttr } from "../../types/dom";

export default function CardBusinessSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <div class="sm:flex">
        <div class={""}>
          <h2
            class={`font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}
          >
            Find a better card deal in few easy steps.
          </h2>
          <p
            class={`font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
            eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

          <ButtonGradient>Start now</ButtonGradient>
        </div>

        <div class={""}>
          <Image src={assets.payment_card} alt="billing" class="w-[100%] h-[100%]" />
        </div>
      </div>
    </section>
  );
}
