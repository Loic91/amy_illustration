TweenMax.staggerFrom(
    ".shamblen",
    1.8,
    {
        x: "60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);
TweenMax.staggerFrom(
    ".amy",
    1.8,
    {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);

TweenMax.from("#content", 2.6, {
    opacity: 0,
    delay: 1.6,
})

TweenMax.from(".nav", 2.1, {
    opacity: 0,
    y: "40",
    delay: 1.6,
})