Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".logo" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  var btn =  document.querySelector(".btn")
  btn.addEventListener("click", ()=>{
      gsap.to(".loder ", {
          top: "-100vh",
          duration: 3,
          delay: 0.5,
          ease : ease
      });
  }) 


