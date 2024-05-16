import { animations } from "./index";

/**
 * CSS Animation comonents  for solid js
 * @link https://sarthology.github.io/Animatopy/
 */
export type AnimationMotion = typeof animations[number];
export type AnimateProps = {
  motion?: AnimationMotion;
  duration?: string | number;
  infinite?: boolean;
  once?: boolean;
  observer?: IntersectionObserverInit;
};
