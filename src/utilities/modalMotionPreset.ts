type AnimationName = "slideInBottom" | "slideInRight" | "scale";
let currentIndex: number = 0;
const animationList: AnimationName[] = [
  "slideInBottom",
  "slideInRight",
  "scale",
];

const getNextAnimationName = (): AnimationName => {
  const animationName = animationList[currentIndex];
  currentIndex = (currentIndex + 1) % animationList.length; // Circular rotation
  return animationName;
};

export default getNextAnimationName;
