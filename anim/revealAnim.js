export const FADE_OPACITY_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { type: "tween" } },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "tween" } },
};

export const FADE_LEFT_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "tween" } },
};

export const FADE_RIGHT_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, x: +10 },
  show: { opacity: 1, x: 0, transition: { type: "tween" } },
};
