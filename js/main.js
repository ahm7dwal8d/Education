$(".header .container .burger-icon").click(function () {

    $(".header .container ul").slideToggle("2000")

    $(this).toggleClass("active")
})


// landing Section 

let landing = document.querySelector(".landing")

let landingimg = ["home-slide-1.jpg" , "home-slide-2.jpg" , "home-slide-3.jpg"]

let RandomNumber = Math.floor(Math.random() * landingimg.length)


setInterval(function () {

    let RandomNumber = Math.floor(Math.random() * landingimg.length)

    landing.style.backgroundImage = "url(images/"+landingimg[RandomNumber]+")"

}, 10000)

// About Section 

let About = document.querySelector(".about")

let AboutOffsetTop = About.offsetTop;

let AboutSpan = document.querySelectorAll(".about .box span")

let Started = false;

function StartCounter(el) {

    let goal = el.dataset.goal;
    
    let counte = setInterval(function () {
        el.textContent++
        
        if (el.textContent === goal) {
            clearInterval(counte)
        }
    } , 2000/goal) 
}

// Header Fixed

let Header = document.querySelector(".header")

// Button To Top 

let ButtonToTop = document.querySelector(".to-top")

console.log(ButtonToTop)


window.onscroll = function () {
    
    // About Counte
    
    if (window.scrollY >= AboutOffsetTop) {

        if (!Started) {

            AboutSpan.forEach((span) => {

                StartCounter(span)

            })

        }
        
        Started = true
    }

// Button To Top 

    if (window.scrollY >= 100) {

        Header.classList.add("active")

    } else {

        Header.classList.remove("active")

    }

}