import { onCleanup, onMount } from 'solid-js';

type Props = {
    pageId: string;
    version?: string;
    attribution?: string;
}

export default function FacebookChat(props: Props) {
    const { pageId, version = 'v21.0', attribution = 'biz_inbox' } = props;
    onMount(() => {
        // Set up the chatbox attributes
        const chatbox = document.getElementById('fb-customer-chat') as HTMLElement;
        if (chatbox) {
            chatbox.setAttribute('page_id', pageId);
            chatbox.setAttribute('attribution', attribution);
        }

        // Load the Facebook SDK asynchronously
        (window as any).fbAsyncInit = function () {
            (window as any).FB.init({
                xfbml: true,
                version: version,
            });
        };

        (function (d: Document, s: string, id: string) {
            var js: HTMLScriptElement;
            var fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s) as HTMLScriptElement;
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode?.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');

        // Cleanup the script when the component unmounts
        onCleanup(() => {
            const js = document.getElementById('facebook-jssdk');
            if (js) {
                js.remove();
            }
        });
    });

    return (
        <>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" class="fb-customerchat"></div>
        </>
    );
};
