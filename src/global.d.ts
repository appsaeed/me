// src/global.d.ts
export { };

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
    function fbAsyncInit(): void;
    var FB: any;
}
