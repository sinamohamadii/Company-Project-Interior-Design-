/* navBar Menu */
const menuBar = document.querySelector(".menuBar");
const hmbIcon = document.querySelector(".hmb-icon");
function collapse() {
    if (menuBar.className === "menuBar") {
        menuBar.className += " show-menu";
        hmbIcon.className = "hmb-icon bi bi-x";
    }
    else {
        menuBar.className = "menuBar";
        hmbIcon.className = "hmb-icon bi bi-list";
    }
};
/* header Slider */
let slideIndex = 0;
var slides = document.getElementsByClassName("header-slides");
var dots = document.getElementsByClassName("header-dot");
var i;
showSlides();
function currentSlide(n) {
    let hSlide = slides[n - 1];
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    hSlide.style.display = "block";
    dots[n - 1].className += " active-dot";
};
function showSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace(" active-dot", "");
    };
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    setTimeout(showSlides, 20000);
};
/* header Animations */
const hTitle = document.querySelector(".header-title");
const hTxt = document.querySelector(".header-txt");
const hTitlet = document.querySelector(".header-title").textContent;
const hTxtt = document.querySelector(".header-txt").textContent;
const stringTxt = hTxtt.split("");
const stringTitle = hTitlet.split("");
hTitle.textContent = "";
hTxt.textContent = "";
for (i = 0; i < stringTitle.length; i++) {
    hTitle.innerHTML += `<span class ="h-span">` + stringTitle[i] + "</span>";
};
for (i = 0; i < stringTxt.length; i++) {
    hTxt.innerHTML += `<span class ="t-span">` + stringTxt[i] + "</span>";
};
let timer = setInterval(txtAniamation, 50);
let char = 0;
function txtAniamation() {
    const span = hTitle.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === stringTitle.length) {
        complete();
        return;
    }
};
function complete() {
    clearInterval(timer);
    timer = null;
};
let timerSecond = setInterval(txtAniamation1, 50);
let char1 = 0;
function txtAniamation1() {
    const spant = hTxt.querySelectorAll("span")[char1];
    spant.className += " fade-t";
    char1++;
    if (char1 === stringTxt.length) {
        complete1();
    }
};
function complete1() {
    clearInterval(timerSecond);
    timerSecond = null;
};
/*______________*/
const items = document.querySelectorAll(".nav-item");
const hslides = document.querySelectorAll(".header-slides");
const logo = document.querySelector(".logo_container");
const icons = document.querySelectorAll(".header-icon");
const text = document.querySelectorAll(".header-content");
const navBar = document.querySelectorAll(".nav-container");
const hdots = document.querySelectorAll(".header-dot");

const tl = new TimelineMax();
tl.fromTo(navBar, 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: Power2.easeInOut })
tl.fromTo(hslides, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=1")
tl.fromTo(items, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut })
tl.fromTo(logo, 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, "-=1")
tl.fromTo(icons, 1, { opacity: 1, y: -30 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, "-=1")
tl.fromTo(text, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1");
tl.fromTo(hdots, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1");

/* gallery Section */
const gSlides = document.querySelectorAll(".gallery-slides");
const gList = document.querySelectorAll(".list-img");
let gIndex = 0;
let thirdtimer = setInterval(showGSlides, 10000);
function showGSlides() {
    let i;
    for (i = 0; i < gSlides.length; i++) {
        gSlides[i].style.display = "none";
        gList[i].style.border = 0;
    };
    if (gIndex > gSlides.length - 1) {
        gIndex = 0;
    };
    gIndex++;
    gSlides[gIndex - 1].style.display = "block";
    gList[gIndex - 1].style.border = "4px solid #fdb178";
};

function currentGslide(n) {
    let i;
    for (i = 0; i < gSlides.length; i++) {
        gSlides[i].style.display = "none";
        gList[i].style.border = 0;
    }
    gSlides[n - 1].style.display = "block";
    gIndex = n - 1;
    gList[gIndex].style.border = "4px solid #fdb178";
};

/* products Section */
let proIndex = 1;
const proDot = document.querySelectorAll(".pro-dot");
const fProImg = document.querySelector(".fpro-card-img");
const fProEx = document.querySelector(".first-pro-ex");
const fProEx2 = document.querySelector(".first-pro-ex2");
const fPrice = document.querySelector(".first-pro-price");
/**/
const sProImg = document.querySelector(".spro-card-img");
const sProEx = document.querySelector(".second-pro-ex");
const sProEx2 = document.querySelector(".second-pro-ex2");
const sPrice = document.querySelector(".second-pro-price");
/**/
const tProImg = document.querySelector(".tpro-card-img");
const tProEx = document.querySelector(".third-pro-ex");
const tProEx2 = document.querySelector(".third-pro-ex2");
const tPrice = document.querySelector(".third-pro-price");
function changePro(n) {
    let i;
    for (i = 0; i < proDot.length; i++) {
        proDot[i].className = proDot[i].className.replace(" active-pro-dot", "");
    };
    proIndex += n;
    if (proIndex > 3) {
        proIndex = 1;
    }
    else if (proIndex < 1) {
        proIndex = 3;
    };
    console.log(proIndex);
    switch (proIndex) {
        case 1:
            proDot[0].className += " active-pro-dot";
            fProImg.setAttribute("src", "img/sell/andreas-haslinger-6z5-rSVTSm4-unsplash.jpg");
            fProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            fProEx2.innerHTML = "hello not there";
            fPrice.innerHTML = "15.8$";
            sProImg.setAttribute("src", "img/sell/arno-smit-Knynaa97O0M-unsplash.jpg");
            sProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            sProEx2.innerHTML = "hello not there";
            sPrice.innerHTML = "15.9$";
            tProImg.setAttribute("src", "img/sell/collov-home-design--5HHAP5UWFM-unsplash.jpg");
            tProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            tProEx2.innerHTML = "hello not there";
            tPrice.innerHTML = "16$";
            break;
        case 2:
            proDot[1].className += " active-pro-dot";
            fProImg.setAttribute("src", "img/sell/daiga-ellaby-7RbrfvZySOs-unsplash.jpg");
            fProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            fProEx2.innerHTML = "hello not there";
            fPrice.innerHTML = "16.1$";
            sProImg.setAttribute("src", "img/sell/hannah-busing-bwuyJ40MwJA-unsplash.jpg");
            sProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            sProEx2.innerHTML = "hello not there";
            sPrice.innerHTML = "16.2$";
            tProImg.setAttribute("src", "img/sell/irene-strong-SQEP7N858_E-unsplash.jpg");
            tProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            tProEx2.innerHTML = "hello not there";
            tPrice.innerHTML = "16.3$";
            break;
        case 3:
            proDot[2].className += " active-pro-dot";
            fProImg.setAttribute("src", "img/sell/7.jpg");
            fProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            fProEx2.innerHTML = "hello not there";
            fPrice.innerHTML = "16.4$";
            sProImg.setAttribute("src", "img/sell/8.jpg");
            sProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            sProEx2.innerHTML = "hello not there";
            sPrice.innerHTML = "16.5$";
            tProImg.setAttribute("src", "img/sell/9.jpg");
            tProEx.innerHTML = "Lorem ipsum dolor sit amet.";
            tProEx2.innerHTML = "hello not there";
            tPrice.innerHTML = "16.6$";
            break;
    }
};

/* blog Section */
const blogs = document.querySelectorAll(".blog");
const blogMenus = document.querySelectorAll(".blog-m-item");
function blog(n) {
    for (i = 0; i < blogs.length; i++) {
        blogs[i].style.display = "none";
    };
    blogs[n - 1].style.display = "flex";
    for (i = 0; i < blogMenus.length; i++) {
        blogMenus[i].classList.remove("blog-m-item-avtive");
    };
    blogMenus[n - 1].className += " blog-m-item-avtive";
};

