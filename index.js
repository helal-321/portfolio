const timeline = gsap.timeline({defaults: {ease: "power2.inOut"}});
const welcomeTexts = gsap.utils.toArray(".welcome-text");

welcomeTexts.forEach((text,index) => {
    const isfirst = index === 0;
    const islast = index === welcomeTexts.length - 1;
    const holdTime = isfirst ? 0.6 : islast ? 0.6 : 0.12;
    if (isfirst) {
        timeline.to(text, { opacity: 1, duraion: 0.6, ease:"power2.out", delay: 0.8 });
    } else{
        timeline.set(text, { opacity: 1});
    }
    if (!islast) {
        timeline.set(text, { opacity: 0}, `+=${holdTime}`)
    }


});
      timeline.to(".text", {
      y: -50,
      opacity: 0,
      duraion: 0.4,
     ease: "power3.inOut"
    }, "+=0.3" );

   timeline.to(".loading", { y: "-100%", duraion: 0.8, ease: "expo.out"}, "-=0.1")
      .to(".loading-round", { height: 0, ease: "expo.out"}, "-=0.5")
      .to(".content", {
  y: 0,
  duration: 0.8,
  ease: "expo.out",
  onComplete: () => {
    gsap.set(".content", {
      position: "absolute"
    });
  }
}, "-=0.8")
      .to(".content h1", {
        opacity: 1,
        filter: "blur(0px)",
        duraion: 0.9,
        ease: "power3.out"
      }, "-=0.3")
