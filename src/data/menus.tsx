import { FiHeadphones, FiHome, FiPackage } from "solid-icons/fi";
import { IoBusiness } from "solid-icons/io";
import { SiSkillshare } from "solid-icons/si";
import { VsFeedback } from "solid-icons/vs";

export default [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Skills", path: '/#skills', icon: SiSkillshare },
  { name: "Projects", path: '/#projects', icon: FiPackage },
  { name: "Reviews", path: '/#reviews', icon: VsFeedback },
  { name: "Companies", path: '/#companies', icon: IoBusiness },
  { name: "Contact", path: '/#contact', icon: FiHeadphones },
  // { name: "ai", path: null },
  // { name: "companies", path: null },
  // { name: "testimonials", path: null },
];
