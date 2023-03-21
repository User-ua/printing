const sliderElement = document.querySelector(".slider");
const servisesElement = document.querySelector(".services-block");
const fotmBlockElement = document.querySelector(".form-block-index");

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
const nextButtonSmileElement = document.querySelector(".button__next--smile");
const nextButtonElementStapTwo = document.querySelector(".button__next--stap-two");
const nextButtonElementStepThree = document.querySelector(".button__next--stap-three");

const priseFormStapOne = document.querySelector(".form-block--stap-one");
const priseFormStapTwo = document.querySelector(".form-block--stap-two");
const priseFormStapThree = document.querySelector(".form-block--stap-three");
const smileForm = document.querySelector(".smile");

if (fotmBlockElement)
{
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
    
    prevButtonElementStapOne.addEventListener("click", clickHandlerStapOne);
    prevButtonElementStapTwo.addEventListener("click", clickHandlerStapTwo);
    prevButtonElementStepThree.addEventListener("click", clickHandlerStapThree);
    nextButtonSmileElement.addEventListener("click", clickHandlerStapThree);
    nextButtonElementStapTwo.addEventListener("click", clickHandlerStapOne);
    nextButtonElementStepThree.addEventListener("click", clickHandlerStapTwo);
}


/*nextButtonElement.addEventListener("click", nextClickHandler);*/

/*prevButtonElement.forEach (prevButtonElementItem => {
    prevButtonElementItem.addEventListener("click", nextClickHandler)
    });*/


/*slider*/

if (sliderElement)
{
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
}

/*servises*/

const fdmTechnology = document.querySelector(".technologies-block--fdm");
const slaTechnology = document.querySelector(".technologies-block--sla");

if (servisesElement)
{
    fdmTechnology.addEventListener("click",
function () {
    fdmTechnology.classList.toggle("technologies-block--open");   
});

slaTechnology.addEventListener("click",
function () {
    slaTechnology.classList.toggle("technologies-block--open");   
});
}

const callFormElement = document.querySelector(".button__form");

callFormElement.addEventListener("click", formsend);
let formInput = document.querySelectorAll(".input");
let className = document.querySelector(".input__name");
let telefon = document.querySelector(".input__tel");
let invalidName = document.querySelector(".input-test-name");
let invalidTelefon = document.querySelector(".input-test-telefon");
function formsend(e) {
    e.preventDefault();
    
    for (let index = 0; index < formInput.length; index++){
        const input = formInput[index]
        formRemuveError(input);
        console.log(index)

        if (input.classList.contains("telefon-namber")){
            if(telTest(input)){
                formRemuveError(input);
            } else {
                formAddError(input);
            } 
        }    
        if(input.value === ""){
            formAddError(input);
            invalidName.classList.add("test-failed");
            invalidTelefon.classList.add("test-failed");
        }
    }
        
    if (className.classList.contains("error")){
        invalidName.classList.add("test-failed");
    } else {
        invalidName.classList.remove("test-failed");
    }        
    if(telefon.classList.contains("error")){
        invalidTelefon.classList.add("test-failed");
    } else {
        invalidTelefon.classList.remove("test-failed");
    }
    
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    
    function formRemuveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
        
    }

    function telTest(input){
        return/^([0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2})$/.test(input.value);   
    }
    
}