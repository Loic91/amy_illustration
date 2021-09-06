gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// chaque fois que Locomotive Scroll se met à jour, dire à ScrollTrigger de se mettre à jour également (positionnement de synchronisation)
locoScroll.on("scroll", ScrollTrigger.update);

// dire à ScrollTrigger d'utiliser ces méthodes proxy pour l'élément ".smooth-scroll" puisque Locomotive Scroll détourne des choses
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // nous n'avons pas besoin de définir un scrollLeft car nous ne faisons défiler que verticalement.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll gère les choses de manière complètement différente sur les appareils mobiles - il ne transforme même pas du tout le conteneur! Donc, pour obtenir le bon comportement et éviter les tracas, nous devons épingler les choses avec la position: fixe sur mobile. Nous le détectons en vérifiant s'il y a une transformation appliquée au conteneur (l'élément contrôlé par LocomotiveScroll).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});



ScrollTrigger.create({
    trigger: '.bespoke',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.bespoke', 2, {
        x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.photo',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.photo', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.svg_line',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.svg_line', 2.5, {
        // x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.graphy',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.graphy', 2, {
        x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.anima',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.anima', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.tions',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.tions', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})



// ****************************



ScrollTrigger.create({
    trigger: '#phraz_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_1', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_2', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_3', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_4', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})


ScrollTrigger.create({
    trigger: '#phraz_1_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_1_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_2_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_2_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_3_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_3_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_4_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_4_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#phraz_5_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#phraz_5_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
// **********************************
ScrollTrigger.create({
    trigger: '.view',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.view', 2, {
        x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.col',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.col', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.svg_line_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.svg_line_2', 2, {
        // x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.lec',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.lec', 2, {
        x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.tio',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.tio', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.svg_line_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.svg_line_3', 2, {
        // x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.ns',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.ns', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.arrow',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('.arrow', 2, {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    }),
    // markers: true
})
// **********************************
ScrollTrigger.create({
    trigger: '#yellow_phraz_1',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_1', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_2',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_2', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_3',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_3', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_4',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_4', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_5',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_5', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_6',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_6', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
// ***********************
ScrollTrigger.create({
    trigger: '#yellow_phraz_1_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_1_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_2_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_2_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_3_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_3_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_4_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_4_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_5_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_5_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_6_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_6_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_7_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_7_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_8_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_8_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_9_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_9_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_10_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_10_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '#yellow_phraz_11_mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#yellow_phraz_11_mobile', 2, {
        y: '100%',
        delay: 0.9
    }),
    // markers: true
})





