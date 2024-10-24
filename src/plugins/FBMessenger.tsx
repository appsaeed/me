import { onCleanup, onMount } from "solid-js";

type Props = {
    xfbml?: boolean,
    version?: string,
    page_id: string,
    attribution?: string,
    className?: string,
    id?: string,
}

export default function FbMessenger(props: Props) {
    const { xfbml = true, version = 'v18.0', page_id = '', attribution = 'biz_inbox', id = 'fb-customer-chat', className = '' } = props;

    onMount(() => {

        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        document.body.appendChild(script);

        //@ts-ignore
        window.fbAsyncInit = function () {
            //@ts-ignore
            FB.init({
                xfbml,
                version
            });
        };

        onCleanup(() => {
            //@ts-ignore
            window.fbAsyncInit = null;

            document.removeChild(script);
        })

    })

    return (
        <>
            <div id="fb-root"></div>
            <div ref={(elm) => {
                elm.setAttribute('page_id', page_id);
                elm.setAttribute('attribution', attribution)
            }} id={id} class={className}>
            </div>
        </>
    )
}
