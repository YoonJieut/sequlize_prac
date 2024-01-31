import gsap from "gsap";

const image = document.querySelector(".image");
const glitch = gsap.to(image, {
  duration: 5,
  repeat: -1,
  x: 0,
  y: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transformOrigin: "center center",
  ease: "sine.inOut",
  stagger: 0.1,
  onUpdate: () => {
    image.skewY = Math.random() * 0.5;
  },
});

glitch.play();
