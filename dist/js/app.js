/*nav*/

const openButtonElement = document.querySelector(".button--menu");
const openNavElement = document.querySelector(".nav");
const buttonClickHandler = function() {
    openNavElement.classList.toggle("nav--open"); 
    openButtonElement.classList.toggle("button--open");     
}
openButtonElement.addEventListener("click", buttonClickHandler);

/*fotm-block*/

const prevButtonElementStapOne = document.querySelector(".button__prev--stap-one");
const prevButtonElementStapTwo = document.querySelector(".button__prev--stap-two");
const prevButtonElementStepThree = document.querySelector(".button__prev--stap-three");
const nextButtonElement = document.querySelector(".button__next");

const priseFormStapOne = document.querySelector(".form-block--stap-one");
const priseFormStapTwo = document.querySelector(".form-block--stap-two");
const priseFormStapThree = document.querySelector(".form-block--stap-three");
const smileForm = document.querySelector(".smile");
const clickHandlerStapOne = function() {
    priseFormStapTwo.classList.toggle("form-block--clouse"); 
    priseFormStapOne.classList.toggle("form-block--clouse");     
}
const clickHandlerStapTwo = function() {
    priseFormStapTwo.classList.toggle("form-block--clouse"); 
    priseFormStapThree.classList.toggle("form-block--clouse");     
}
const clickHandlerStapThree = function() {
    priseFormStapThree.classList.toggle("form-block--clouse"); 
    smileForm.classList.toggle("form-block--clouse");     
}

/*const smileFormHandler = function() {
    priseFormStapTwo.classList.toggle("price-form--clouse"); 
    priseFormStapOne.classList.toggle("price-form--clouse");     
}*/

prevButtonElementStapOne.addEventListener("click", clickHandlerStapOne);
prevButtonElementStapTwo.addEventListener("click", clickHandlerStapTwo);
prevButtonElementStepThree.addEventListener("click", clickHandlerStapThree);
/*nextButtonElement.addEventListener("click", nextClickHandler);*/

/*prevButtonElement.forEach (prevButtonElementItem => {
    prevButtonElementItem.addEventListener("click", nextClickHandler)
    });*/


/*slider*/

let offset = 0;
const sliderline = document.querySelector(".slider-container__line");

document.querySelector (".slider-button--next").addEventListener ("click", 
function () {
    offset +=490;
    if (offset > 1000) {
        offset = 980;
    }
    sliderline.style.left = -offset + "px";
});

document.querySelector (".slider-button--prev").addEventListener ("click", 
function () {
    offset -=490;
    if (offset < -1000) {
        offset = -980;
    }
    sliderline.style.left = -offset + "px";
});

/*servises*/

const fdmTechnology = document.querySelector(".technologies-block--fdm");
const slaTechnology = document.querySelector(".technologies-block--sla");

fdmTechnology.addEventListener("click",
function () {
    fdmTechnology.classList.toggle("technologies-block--open");   
});

slaTechnology.addEventListener("click",
function () {
    slaTechnology.classList.toggle("technologies-block--open");   
});




/*let left = 0;
const sliderElement = document.querySelector(".product-list");
const sliderLine = document.querySelector(".list-wrapper");
const sliderElementkHandler = function(e) {
    if( window.innerWidth <= 900 ){
        e.preventDefault();
        let line = e.deltaY;
    if (left > -40) {
        left = -40
    };
    if (left < -2640) {
        left = -2640
    };
    left = left - 0.4*line;
    sliderLine.style.left = left + "px";
   } else {
        sliderElementkHandler
   } 
}
sliderElement.addEventListener("wheel", sliderElementkHandler);



let n = 10;
for (let index = 0; index < n; index++){ 
        console.log(index)
    } 



СОБІТИЕ НАВЕДЕНИЕ НА БЛОК
const sliderElement = document.querySelector(".product-list");
const sliderElementkHandler = function() {
    let n = 10;
for (let index = 0; index < n; index++){ 
        console.log(index)
    }    
}
sliderElement.addEventListener("mouseover", sliderElementkHandler);



let offset = 0;
const sliderline = document.querySelector(".slider-line");

document.querySelector (".slider-next").addEventListener ("click", 
function () {
    offset +=600;
    if (offset > 1810) {
        offset = 0;
    }
    sliderline.style.left = -offset + "px";
});

document.querySelector (".slider-prev").addEventListener ("click", 
function () {
    offset -=600;
    if (offset < 0) {
        offset = 1800;
    }
    sliderline.style.left = -offset + "px";
});*/