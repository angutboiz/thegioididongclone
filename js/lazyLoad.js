const images = document.querySelectorAll("img")

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
}

const lazyLoadImage = (entry) => {
    if (entry.isIntersecting) {
        const image = entry.target
        const src = image.getAttribute("data-src")
        if (src) {
            image.src = src
            image.removeAttribute("data-src")
            observer.unobserve(image)
        }
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(lazyLoadImage)
}, observerOptions)

images.forEach((image) => {
    observer.observe(image)
})
