$(document).ready(function () {
    $(".slider-main").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
                margin: 10,
            },
        },
    })

    $(".hot-deal").owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
                margin: 10,
            },
        },
    })

    $(".slider-main").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
                margin: 10,
            },
        },
    })

    $(".trade-maker").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
                margin: 10,
            },
        },
    })
    $(".new-chain").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            1000: {
                items: 3,
                margin: 10,
            },
        },
    })

    const triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"))
    triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new mdb.Tab(triggerEl)

        triggerEl.addEventListener("click", (event) => {
            event.preventDefault()
            tabTrigger.show()
        })
    })
})
