var csr = document.querySelector(".csr");
var bcsr = document.querySelector(".back-csr");

document.addEventListener("mousemove", function (dot) {
  csr.style.left = dot.x + "px";
  csr.style.top = dot.y + "px";
  bcsr.style.left = dot.x - 250 + "px";
  bcsr.style.top = dot.y - 250 + "px";
});

// var h4all = document.querySelectorAll(".nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     csr.style.scale = 3;
//     csr.style.border = "1px solid #fff";
//     csr.style.backgroundColor = "transparent";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     crsr.style.border = "0px solid #95c11e";
//     crsr.style.backgroundColor = "#95c11e";
//   });
// });

gsap.to(".nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: "0.4",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -12%",
    scrub: 1,
    // marker: true,
  },
});
gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
    // marker: true,
  },
});
gsap.from(".iimg0,.iimg1", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".sect3",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 1,
    // markers:true,
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  // opacity:0,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 80%",
    scrub: 2,
    // markers:true,
  },
});


gsap.from(".c1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".c1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
    // markers:true,
  },
});

gsap.from(".c2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".c2",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
    // markers:true,
  },
});

gsap.from(".sect4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".sect4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
    // markers:true,
  },
});