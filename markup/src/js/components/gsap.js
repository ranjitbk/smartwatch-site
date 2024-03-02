import { gsap } from 'gsap';

export default function initGsap() {
  // gsap.to(".logo", { duration: 1, x: 0, rotation: 360, ease: "power2.inOut" });
  // gsap.from(".btn", { duration: 1, x: 200, rotation: 360, ease: "power2.inOut" });
  // gsap.fromTo(".nav", { y: -50, opacity: 0.5 }, { duration: 1, y: 0, opacity: 1, ease: "power2.inOut" });

  // // var tl = gsap.timeline();

  // // tl.from(".about-me-box", { duration: 1, x: -100 }, 1.5)
  // // .from(".about-credentials-wrap", { duration: 0.5, y: 50 }, "-=0.5")
  // // .to(".info-box", { duration: 0.5, rotation: 360 }, "+=1");

  // var tl = gsap.timeline({
  // 	onStart: function() {
  // 		console.log("Timeline started");
  // 	},
  // 	onComplete: function() {
  // 		console.log("Timeline completed");
  // 	}
  // });

  // tl.to(".about-me-box", { duration: 1, x: 100 })
  // .addLabel("midpoint")
  // .to(".about-credentials-wrap", { duration: 0.5, y: 50 }, "midpoint")
  // .to(".info-box", { duration: 0.5, rotation: 360 });

  // gsap.to("#box", {duration: 1, x: 100});
  //   gsap.to('#box', { duration: 2, x: 300, ease: 'bounce.out' });

  //   gsap.from('#circle', { duration: 2, opacity: 0, scale: 0.5 });

  //   let tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });

  //   tl.to('#box', { duration: 1, x: 200 }).to('#box', { duration: 1, backgroundColor: 'blue', ease: 'none' }).to('#circle', { duration: 1, x: 200, scale: 2 });

  //   gsap.to('#box', {
  //     scrollTrigger: '#box', // start the animation when "#box" enters the viewport
  //     x: 500, // move "#box" to the right
  //     duration: 3,
  //   });

  gsap.to('#box', { duration: 2, x: 200, ease: 'bounce.out' });
  gsap.from('#box2', { duration: 5, opacity: 0.5, backgroundColor: 'white', ease: 'elastic.out' });
  gsap.fromTo('#box3', { x: 0 }, { x: 100, ease: 'power1.out' });

  let tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });

  //   tl.to('#circle', { duration: 1, x: 100, width: 110, height: 110 })
  //     .from('#circle2', { backgroundColor: 'red' })
  //     .fromTo('#circle3', { width: 70, height: 70 }, { width: 120, height: 120 });

  tl.to('#circle', { x: 100, width: 110, height: 110 }).to('#circle2', { x: 90, width: 120, height: 120 }).to('#circle3', { x: 80, width: 130, height: 130 });

  gsap.to('.scroll-trigger', {
    scrollTrigger: '.scroll-trigger',
    x: 500,
    duration: 3,
  });
}
