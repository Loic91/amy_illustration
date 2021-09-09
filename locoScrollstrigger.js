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

// *************************

// ScrollTrigger.create({
//     trigger: '.box_color_1',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.to('.box_color_1', 5.5, {
//         opacity: 0,
//         // x: -100,
//         delay: 0.2
//     }),
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '.box_color_2',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.to('.box_color_2', 5.5, {
//         opacity: 0,
//         // x: 100,
//         delay: 0.2
//     }),
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '#text_pictures_1',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.from('#text_pictures_1', 2, {
//         y: '100%',
//         delay: 0.9
//     }),
//     // markers: true
// })
// ********

// ScrollTrigger.create({
//     trigger: '.box_color_3',
//     scroller: '.smooth-scroll',

//     start: "top center",
//     end: "top top",
//     animation: gsap.to('.box_color_3', 5.5, {
//         opacity: 0,
//         // x: 100,
//         delay: 0.2
//     }),
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '.box_color_4',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.to('.box_color_4', 5.5, {
//         opacity: 0,
//         // x: -100,
//         delay: 0.2
//     }),
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '#text_pictures_2',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.from('#text_pictures_2', 2, {
//         y: '100%',
//         delay: 0.9
//     }),
//     // markers: true
// })
// ********


// ScrollTrigger.create({
//     trigger: '.box_color_5',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.to('.box_color_5', 5.5, {
//         // y: '100%',
//         opacity: 0,
//         delay: 0.2
//     }),
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '.box_color_6',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.to('.box_color_6',5.5, {
//         // y: '100%',
//         opacity: 0,
//         delay: 0.2
//     }),
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '#text_pictures_3',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: gsap.from('#text_pictures_3', 2, {
//         y: '100%',
//         delay: 0.9
//     }),
//     // markers: true
// })
// ********




ScrollTrigger.create({
    trigger: '.block_1__xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_1__xl", 1.9, {
        x: "620",
        y: "160",
        scale: "1.3",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_1__mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_1__mobile", 1.9, {
        x: "320",
        y: "160",
        scale: "1.2",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_1__tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_1__tel", 1.9, {
        x: "170",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_1__small_tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_1__small_tel", 1.9, {
        x: "150",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.block_2__xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_2__xl", 1.9, {
        x: "0",
        y: "160",
        scale: "1.3",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_2__mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_2__mobile", 1.9, {
        x: "-320",
        y: "160",
        scale: "1.2",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_2__tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_2__tel", 1.9, {
        x: "-170",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_2__small_tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_2__small_tel", 1.9, {
        x: "-150",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.block_3__xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_3__xl", 1.9, {
        x: "-620",
        y: "160",
        scale: "1.3",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_3__mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_3__mobile", 1.9, {
        x: "320",
        y: "160",
        scale: "1.2",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_3__tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_3__tel", 1.9, {
        x: "170",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_3__small_tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_3__small_tel", 1.9, {
        x: "150",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.block_4__xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_4__xl", 1.9, {
        x: "620",
        y: "160",
        scale: "1.3",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_4__mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_4__mobile", 1.9, {
        x: "-320",
        y: "160",
        scale: "1.2",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_4__tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_4__tel", 1.9, {
        x: "-170",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_4__small_tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_4__small_tel", 1.9, {
        x: "-150",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.block_5__xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_5__xl", 1.9, {
        x: "0",
        y: "160",
        scale: "1.3",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_5__mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_5__mobile", 1.9, {
        x: "320",
        y: "160",
        scale: "1.2",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_5__tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_5__tel", 1.9, {
        x: "170",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_5__small_tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_5__small_tel", 1.9, {
        x: "150",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.block_6__xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_6__xl", 1.9, {
        x: "-620",
        y: "160",
        scale: "1.3",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_6__mobile',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_6__mobile", 1.9, {
        x: "-320",
        y: "160",
        scale: "1.2",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_6__tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_6__tel", 1.9, {
        x: "-170",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.block_6__small_tel',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: TweenMax.to(".block_6__small_tel", 1.9, {
        x: "-150",
        y: "50",
        scale: "1.4",
        ease: Expo.easeInOut,
        // delay: 0.9,
        delay: 2.1,
    }),
    // markers: true
})



ScrollTrigger.create({
    trigger: '.line p',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.timeline().from('.line p', 2.8,{
        delay: 1,
        ease: 'power4.out',
        y: 60, //Régle la disctance entre le haut et le bas 
        skewY: 15,
        stagger: {
            amount: .8
        }
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.line_mobile p',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.timeline().from('.line_mobile p', 2.8,{
        delay: 1,
        ease: 'power4.out',
        y: 60, //Régle la disctance entre le haut et le bas 
        skewY: 15,
        stagger: {
            amount: .8
        }
    }),
    // markers: true
})
ScrollTrigger.create({
    trigger: '.line_tel p',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.timeline().from('.line_tel p', 2.8,{
        delay: 1,
        ease: 'power4.out',
        y: 50, //Régle la disctance entre le haut et le bas 
        skewY: 15,
        stagger: {
            amount: .8
        }
    }),
    // markers: true
})

ScrollTrigger.create({
    trigger: '.line_small_tel p',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.timeline().from('.line_small_tel p', 2.8,{
        delay: 1,
        ease: 'power4.out',
        y: 40, //Régle la disctance entre le haut et le bas 
        skewY: 15,
        stagger: {
            amount: .8
        }
    }),
    // markers: true
})

// *****************************

// ScrollTrigger.create({
//     trigger: '#btn',
//     scroller: '.smooth-scroll',

//     start: "top bottom",
//     end: "top top",
//     animation: TweenMax.from("#btn", 1.9, {
//         y: "50",
//         opacity: 0,
//         ease: Expo.easeInOut,
//         delay: 2.1,
//     }),
//     // markers: true
// })

