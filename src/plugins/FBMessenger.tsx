import { createEffect, onCleanup } from "solid-js";

type Props = {
    xfbml?: boolean;
    version?: string;
    page_id: string;
    attribution?: string;
    className?: string;
    id?: string;
};

export default function FbMessenger({
    xfbml = true,
    version = 'v18.0',
    page_id,
    attribution = 'biz_inbox',
    id = 'fb-customer-chat',
    className = ''
}: Props) {
    createEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        script.async = true; // Load script asynchronously
        document.body.appendChild(script);

        window.fbAsyncInit = () => {
            if (window.FB) { // Check if FB is available
                window.FB.init({
                    xfbml,
                    version,
                });
            }
        };

        // Cleanup: Remove the script from the document
        onCleanup(() => {
            document.body.removeChild(script);
        });
    });

    return (
        <>
            <div id="fb-root"></div>
            <div
                id={id}
                class={className}
                ref={elm => {
                    if (elm) {
                        elm.setAttribute('page_id', page_id);
                        elm.setAttribute('attribution', attribution);
                    }
                }}
            />
        </>
    );
}
