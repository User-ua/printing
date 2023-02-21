const openButtonElement = document.querySelector(".button--menu");
const openNavElement = document.querySelector(".nav");

const buttonClickHandler = function() {
    openNavElement.classList.toggle("nav--open"); 
    openButtonElement.classList.toggle("button--open");     
}
openButtonElement.addEventListener("click", buttonClickHandler);

let left = 0;
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



/*let n = 10;
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