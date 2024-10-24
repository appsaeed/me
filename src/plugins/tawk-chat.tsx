import { createEffect, onCleanup } from "solid-js";

export default function TawkChat() {
    createEffect(() => {
        // Create the Tawk.to script element
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6719ff9e4304e3196ad77d37/1iauot0vr';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function to remove the Tawk.to script on unmount
        onCleanup(() => {
            const scripts = document.querySelectorAll("script");
            scripts.forEach((s) => {
                if (s.src.includes("tawk.to")) {
                    s.remove();
                }
            });
        });
    });

    return (
        <div>
            <h1>Welcome to my SolidJS App</h1>
            {/* Your other components go here */}
        </div>
    );
}
