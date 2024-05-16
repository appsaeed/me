import Swal from "sweetalert2";
import { getThemeStore } from "utilies";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  showCloseButton: true,
  timer: 10000,
  timerProgressBar: true,
  customClass: "z-[99999]",
  progressSteps: [""],
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
  background: getThemeStore() === "dark" ? "#1e293b" : "#ffffff",
  color: getThemeStore() === "dark" ? "#ffffff" : "#1e293b",
});

export default Toast;
