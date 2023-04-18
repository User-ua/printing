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



const sandButtonElement = document.querySelector(".button--nav");
const sandButtonClickHandler = function(e) {
    e.preventDefault();
    if( window.innerWidth < 900 ) {
        window.location.href = `#sand`;
        openNavElement.classList.toggle("nav--open"); 
        openButtonElement.classList.toggle("button--open");
    } else {
        window.location.href = `#sand`;
    }     
}
sandButtonElement.addEventListener("click", sandButtonClickHandler);


/*fotm-block*/

const prevButtonElementStapOne = document.querySelector(".button__prev--stap-one");
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
    nextButtonSmileElement.addEventListener("click", clickHandlerStapThree);
    nextButtonElementStapTwo.addEventListener("click", clickHandlerStapOne);
    nextButtonElementStepThree.addEventListener("click", clickHandlerStapTwo);
}

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

const questionFormElement = document.querySelector(".button__form");

if (questionFormElement) {
    questionFormElement.addEventListener("click", questionformsend);
}

let formInputQuestion = document.querySelectorAll(".input-form-question");
let className = document.querySelector(".input--your-name");
let telefon = document.querySelector(".input--your-tel");
let invalidName = document.querySelector(".input-test-name");
let invalidTelefon = document.querySelector(".input-test-telefon");
function questionformsend(e) {
    e.preventDefault();
    
    for (let index = 0; index < formInputQuestion.length; index++){
        const input = formInputQuestion[index]
        formRemuveError(input);
        console.log(index)

        if (input.classList.contains("input--your-tel")){
            if(telTest(input)){
                formRemuveError(input);
            } else {
                formAddError(input);
            } 
        }    
        if(input.value === ""){
            formAddError(input);
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

const descriptionFormElement = document.querySelector(".button__send");
const descriptionFormElementStap = document.querySelector(".button__prev--stap");

if (descriptionFormElement) {
    descriptionFormElement.addEventListener("click", descriptionformsend);
}

if (descriptionFormElementStap) {
    descriptionFormElementStap.addEventListener("click", descriptionformsend);
}
let formInputDescription = document.querySelectorAll(".input--form-description");
let descriptionClassName = document.querySelector(".input--name");
let descriptionTelefon = document.querySelector(".input--tel");
let descriptionEmail = document.querySelector(".input--email");
let descriptionInvalidName = document.querySelector(".description-test-name");
let descriptionInvalidTelefon = document.querySelector(".description-test-telefon");
let descriptionInvalidEmail = document.querySelector(".description-test-email");

function descriptionformsend(e) {
    e.preventDefault();
    
    for (let index = 0; index < formInputDescription.length; index++){
        const input = formInputDescription[index]
        formRemuveError(input);
        console.log(index)

        if (input.classList.contains("input--tel")){
            if(telTest(input)){
                formRemuveError(input);
            } else {
                formAddError(input);
            } 
        }    
        if(input.value === ""){
            formAddError(input);
        }
    }
        
    if (descriptionClassName.classList.contains("error")){
        descriptionInvalidName.classList.add("test-failed");
    } else {
        descriptionInvalidName.classList.remove("test-failed");
    }        
    if(descriptionTelefon.classList.contains("error")){
        descriptionInvalidTelefon.classList.add("test-failed");
    } else {
        descriptionInvalidTelefon.classList.remove("test-failed");
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
/*window.addEventListener('resize', (e) => {
    console.log(window.innerWidth);
  });*/


 
const nextStapTwoButtonElement = document.querySelector(".button__prev--stap-two");

if (nextStapTwoButtonElement) {
    nextStapTwoButtonElement.addEventListener("click", formnext);
}

let formInputNext = document.querySelectorAll(".input-next");
let invalidSize = document.querySelectorAll(".stap-two-test");

function formnext(e) {
    e.preventDefault();

    let user = []

    for (let index = 0; index < invalidSize.length; index++) {
        const testAdd = invalidSize[index];
        user.push(testAdd);
    }

    for (let index = 0; index < formInputNext.length; index++){
        const input = formInputNext[index]
        formRemuveError(input);
        
   
        if(input.value === ""){
            formAddError(input);
            user[index].classList.add("test-failed");
        }  else {
            user[index].classList.remove("test-failed");
        }

        if( window.innerWidth < 1200 ) {
            if (index > 1 & index < 3) {
                formAddError(input);
                console.log(index )
            }
        }
    }
    let n = 0;

    for (let index = 0; index < formInputNext.length; index++) {
        const input = formInputNext[index]
        if (!input.classList.contains("error")){
            n++;
        } 
    }

    if( window.innerWidth < 1200 ) {
        if (n > 3) {
            priseFormStapTwo.classList.toggle("form-block--clouse");
            priseFormStapThree.classList.toggle("form-block--clouse");
        }
    }

    if (n > 4) {
        console.log(n)
        priseFormStapTwo.classList.toggle("form-block--clouse");
        priseFormStapThree.classList.toggle("form-block--clouse");
    }
    
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    
    function formRemuveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");   
    }
}


const nextStapThreeButtonElement = document.querySelector(".button__prev--stap-three");

if (nextStapThreeButtonElement) {
    nextStapThreeButtonElement.addEventListener("click", stapthreeformsend);
}

let formInputStapThree = document.querySelectorAll(".input--stap-three");
let classNameStapThree = document.querySelector(".input--name-stap-three");
let telefonStapThree = document.querySelector(".input--telefon-stap-three");
let invalidNameStapThree = document.querySelector(".description-test-name");
let invalidTelefonStapThree = document.querySelector(".description-test-telefon");
function stapthreeformsend(e) {
    e.preventDefault();
    
    for (let index = 0; index < formInputStapThree.length; index++){
        const input = formInputStapThree[index]
        formRemuveError(input);
        console.log(index)

        if (input.classList.contains("input--telefon-stap-three")){
            if(telTest(input)){
                formRemuveError(input);
            } else {
                formAddError(input);
            } 
        }    
        if(input.value === ""){
            formAddError(input);
        }
    }
        
    if (classNameStapThree.classList.contains("error")){
        invalidNameStapThree.classList.add("test-failed");
    } else {
        invalidNameStapThree.classList.remove("test-failed");
    }        
    if(telefonStapThree.classList.contains("error")){
        invalidTelefonStapThree.classList.add("test-failed");
    } else {
        invalidTelefonStapThree.classList.remove("test-failed");
    }

    let n = 0;

    for (let index = 0; index < formInputStapThree.length; index++) {
        const input = formInputStapThree[index]
        if (!input.classList.contains("error")){
            n++;
        } 
    }

    if (n > 1) {
        console.log(n)
        priseFormStapThree.classList.toggle("form-block--clouse");
        smileForm.classList.toggle("form-block--clouse");
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