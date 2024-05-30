gsap.set(".row-h", {scale: 5})

var tl = gsap.timeline ({
    scrollTrigger:{
        trigger:".page-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 5
    },
})

tl.to(".vid",{
    '--clip': "0%",   
    ease : Power4
}, 'a')

tl.to(".row-h",{
    scale: 1,
    ease : Power4
}, 'a')

tl.to(".lft",{
    xPercent: -10,
    stagger: .03,
    ease : Power4 
}, 'b')

tl.to(".rgt",{
    xPercent: 10,
    stagger: .03,
    ease : Power4
}, 'b')