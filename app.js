const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const texti = intro.querySelector("#introText");
const one = intro.querySelector(".one");
const texto = intro.querySelector("#one");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 56000,
  triggerElement: intro,
  triggerHook: 0
})

  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(texti, 0.3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 300,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

// const textAnim2 = TweenMax.fromTo(texto, 0.3, { opacity: 1 }, { opacity: 0 });
// // const textAnim3 = TweenMax.fromTo(texto, 5, { opacity: 1 }, { opacity: 0 });
// let scene3 = new ScrollMagic.Scene({
//   duration: 300,
//   triggerElement: intro,
//   triggerHook: 0.3
// })
//   .addIndicators()
//   .setTween(textAnim2)
//   .addTo(controller);

// // let scene4 = new ScrollMagic.Scene({
// //   duration: 5000,
// //   triggerElement: intro,
// //   triggerHook: 0.8
// // })

// //   .setTween(textAnim3)
// //   .addTo(controller);

//Analysis Anim
let tl = gsap.timeline({
  scrollTrigger: {
      trigger: "main",
      start: "top",
      end: "bottom",
      scrub: "true",
      // pin: true,
      markers: true,

  },
});
tl
.to(".forest", { opacity: 1, duration: 0.5 },0.2)
.to(".forest", { opacity: 0, duration: 1 },0.04)
.to("#two", { opacity: 1, duration: 0.5 })
.to("#two", { opacity: 0, duration: 0.5 },0.5)
.to("#three", { opacity: 1, duration: 0.5 })
.to("#three", { opacity: 0, duration: 0.5 },0.5)
// .to(".four", { opacity: 1, duration: 0.5 })
// .to(".four", { opacity: 0, duration: 0.5 },0.5)
// .to(".five", { opacity: 1, duration: 0.5 })
// .to(".five", { opacity: 0, duration: 0.5 },0.5)
// .to(".six", { opacity: 1, duration: 0.5 })
// .to(".six", { opacity: 0, duration: 0.5 },0.5)
// .to(".seven", { opacity: 1, duration: 0.5 })
// .to(".seven", { opacity: 0, duration: 0.5 },0.5)
// .to(".eight", { opacity: 1, duration: 0.5 })
// .to(".eight", { opacity: 0, duration: 0.5 },0.5)
// .to(".nine", { opacity: 1, duration: 0.5 })
// .to(".nine", { opacity: 0, duration: 0.5 },0.5)
// .to(".ten", { opacity: 1, duration: 0.5 })
// .to(".ten", { opacity: 0, duration: 0.5 },0.5)
//Video Animation 
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 41.6);


