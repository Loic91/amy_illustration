TweenMax.to(".o_one", 2.4, {
    delay: 0.5,
    x: "-100%",
    ease: Expo.easeInOut
});
TweenMax.to(".o_two", 2.4, {
    delay: 0.6,
    x: "100%",
    ease: Expo.easeInOut
});


TweenMax.staggerFrom(
    ".shamblen",
    2.1,
    {
        x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);

TweenMax.staggerFrom(
    ".amy",
    2.1,
    {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);

TweenMax.from(".content", 1.9, {
    opacity: 0,
    y: 60,
    ease: Power3.easeInOut,
    delay: 1.9,
})


TweenMax.from(".nav", 2.1, {
    opacity: 0,
    y: "40",
    delay: 1.8,
})