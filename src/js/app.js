const sliderElement = document.querySelector(".slider");
const servisesElement = document.querySelector(".services-block");
const fotmBlockElement = document.querySelector(".form-block-index");
const smileForm = document.querySelector(".smile");

/*nav*/

const openButtonElement = document.querySelector(".button--menu");
const openNavElement = document.querySelector(".nav");
const buttonClickHandler = function() {
    openNavElement.classList.toggle("nav--open"); 
    openButtonElement.classList.toggle("button--open");     
}
openButtonElement.addEventListener("click", buttonClickHandler);

/*button-close*/

const buttonElementClose = document.querySelector(".button-clouse");

const buttonElementCloseHandler = function () {
    smileForm.classList.toggle("form-block--clouse"); 
}

if (buttonElementClose) 
{
    buttonElementClose.addEventListener("click", buttonElementCloseHandler);
}


/*link to prise*/

const sandButtonElement = document.querySelector(".button--nav");
const priseElement = document.querySelector(".price");
const termsElement = document.querySelector(".price--terms");

if (priseElement)
{const sandButtonClickHandler = function(e) {
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
}

if (termsElement)
{const salesButtonClickHandler = function(e) {
    e.preventDefault();
    if( window.innerWidth < 900 ) {
        window.location.href = `#terms`;
        openNavElement.classList.remove("nav--open"); 
        openButtonElement.classList.remove("button--open");
    } else {
        window.location.href = `#terms`;
    }     
}
sandButtonElement.addEventListener("click", salesButtonClickHandler);
}

/*material and printer button*/


const materialButtonElement = document.querySelector(".promo__menu--button-material");
const printerButtonSmileElement = document.querySelector(".promo__menu--button-printer");
const promoListBlockMaterial = document.querySelector(".promo__list-block-material");
const promoListBlockPrinter = document.querySelector(".promo__list-block-printer");

if (promoListBlockMaterial) 
{
const promoNavButoon = function () {
    printerButtonSmileElement.classList.toggle("promo__menu--button-open"); 
    materialButtonElement.classList.toggle("promo__menu--button-open"); 
    promoListBlockMaterial.classList.toggle("promo__list-block-open"); 
    promoListBlockPrinter.classList.toggle("promo__list-block-open"); 
}
    materialButtonElement.addEventListener("click", promoNavButoon);
    printerButtonSmileElement.addEventListener("click", promoNavButoon);
}

/*fotm-block*/

const prevButtonElementStapOne = document.querySelector(".button__prev--stap-one");
const nextButtonSmileElement = document.querySelector(".button__next--smile");
const nextButtonSmileModdelingElement = document.querySelector(".button__next--smile-moddeling");
const nextButtonElementStapTwo = document.querySelector(".button__next--stap-two");
const nextButtonElementStepThree = document.querySelector(".button__next--stap-three");
const termsForm = document.querySelector(".terms--form-block");
const priseFormStapOne = document.querySelector(".form-block--stap-one");
const priseFormStapTwo = document.querySelector(".form-block--stap-two");
const priseFormStapThree = document.querySelector(".form-block--stap-three");



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
    const clickHandlerSmileModdeling = function() {
        termsForm.classList.toggle("form-block--clouse"); 
        smileForm.classList.toggle("form-block--clouse");     
    }
if (fotmBlockElement)
{    
    prevButtonElementStapOne.addEventListener("click", clickHandlerStapOne);
    nextButtonSmileElement.addEventListener("click", clickHandlerStapThree);
    nextButtonElementStapTwo.addEventListener("click", clickHandlerStapOne);
    nextButtonElementStepThree.addEventListener("click", clickHandlerStapTwo);
}
if (nextButtonSmileModdelingElement) {
    nextButtonSmileModdelingElement.addEventListener("click", clickHandlerSmileModdeling);
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
    
const fdmTechnologyHandler = function () {
    fdmTechnology.classList.toggle("technologies-block--open");   
};
const slaTechnologyHandler = function () {
    slaTechnology.classList.toggle("technologies-block--open");   
};

fdmTechnology.addEventListener("click", fdmTechnologyHandler);
slaTechnology.addEventListener("click", slaTechnologyHandler);
}

/*form question*/

const questionFormElement = document.querySelector(".button__form");
const formInputQuestion = document.querySelectorAll(".input-form-question");
const inputQuestionError = document.querySelectorAll(".input-question-error");

let questionInput = [];

const questionformsend = function(e) {
    e.preventDefault(); 

    for (let index = 0; index < inputQuestionError.length; index++) {
        questionInput.push(inputQuestionError[index]);
    }

    for (let index = 0; index < formInputQuestion.length; index++){
        const input = formInputQuestion[index]
        formRemuveError(input);

        if(input.value === ""){
            formAddError(input);
            questionInput[index].classList.add("test-failed");
        } else {
            questionInput[index].classList.remove("test-failed");
        }

        if (input.classList.contains("input--your-tel")){
            if(isTel(input)){
                formRemuveError(input);
                questionInput[index].classList.remove("test-failed");
                
            } else {
                formAddError(input);
                questionInput[index].classList.add("test-failed");
                console.log(questionInput[index]);
            } 
        }    
    }
    
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    
    function formRemuveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
    }

    function isTel(input){
        return/^([0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2})$/.test(input.value);   
    }   
}

const formQuestionInputBugFix = function (e) {
    
    if (e.target.classList.contains("error")) {
        e.target.classList.remove("error");

        for (let index = 0; index < formInputQuestion.length; index++){
            const input = formInputQuestion[index];

            if (e.target === input) {
                questionInput[index].classList.remove("test-failed");
            }
        }
    }
}

if (questionFormElement) {
    questionFormElement.addEventListener("click", questionformsend); 
}

for (let index = 0; index < formInputQuestion.length; index++){
    const input = formInputQuestion[index];
    input.addEventListener("input", formQuestionInputBugFix);
}

/*Form description*/

const descriptionFormElement = document.querySelector(".button__send");
const descriptionFormElementStap = document.querySelector(".button__prev--stap");
const formInputDescription = document.querySelectorAll(".input--form-description");
const inputDescriptionError = document.querySelectorAll(".input-description-error");
const formBlockFile = document.querySelector(".form-block__file");

let descriptionInput = [];

const descriptionFormSend = function(e) {
    e.preventDefault();

    for (let index = 0; index < inputDescriptionError.length; index++) {
        descriptionInput.push(inputDescriptionError[index]);
    }
    
    for (let index = 0; index < formInputDescription.length; index++){
        const input = formInputDescription[index]
        formRemuveError(input);

        if(input.value === ""){
            formAddError(input);
            descriptionInput[index].classList.add("test-failed");
        } else {
            descriptionInput[index].classList.remove("test-failed");
        } 

        if (input.classList.contains("input--tel")){
            if(isTel(input)){
                formRemuveError(input);
                descriptionInput[index].classList.remove("test-failed");
                
            } else {
                formAddError(input);
                descriptionInput[index].classList.add("test-failed");
            } 
        }      
    }

    let n = 0;

    if(user.length >= 1) {
        formBlockFile.classList.remove("test-failed");
        console.log(user);
        n = 1;
    } else {
        formBlockFile.classList.add("test-failed");
        n = 0;
    }

    for (let index = 0; index < formInputDescription.length; index++) {
        const input = formInputDescription[index]
        if (!input.classList.contains("error")){
            n++;
        } 

        if (n > 4) {
            termsForm.classList.toggle("form-block--clouse");
            smileForm.classList.toggle("form-block--clouse"); 
            changeHandler;
        }
    }
    
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    
    function formRemuveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
        
    }

    function isTel(input){
        return/^([0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2})$/.test(input.value);   
    } 
}

if (descriptionFormElement) {
    descriptionFormElement.addEventListener("click", descriptionFormSend);
    descriptionFormElementStap.addEventListener("click", descriptionFormSend);
}

const formDescriptionInputBugFix = function (e) {
    
    if (e.target.classList.contains("error")) {
        e.target.classList.remove("error");

        for (let index = 0; index < formInputDescription.length; index++){
            const input = formInputDescription[index];

            if (e.target === input) {
                descriptionInput[index].classList.remove("test-failed");
            }
        }
    }
}

for (let index = 0; index < formInputDescription.length; index++){
    const input = formInputDescription[index];
    input.addEventListener("input", formDescriptionInputBugFix);
}

/*inputfile*/

const user = [];

const buttonUpload = document.querySelector(".inputfile");


const changeHandler = function (e) {
    if(e.target.files.length >= 1) {
        formBlockFile.classList.remove("test-failed");
    } else {    
        formBlockFile.classList.add("test-failed");
    }
    
    let typefile = e.target.files;
    user.push(typefile);
    
}
if (buttonUpload) {
    buttonUpload.addEventListener("change", changeHandler);
}

/*Form stapTwo*/

const nextStapTwoButtonElement = document.querySelector(".button__prev--stap-two");
const formInputNext = document.querySelectorAll(".input-next");
const inputStapTwoError = document.querySelectorAll(".input-staptwo-error");

let stapTwoInput = []

const formnext = function(e) {
    e.preventDefault();

    for (let index = 0; index < inputStapTwoError.length; index++) {
        stapTwoInput.push(inputStapTwoError[index]);
    }

    for (let index = 0; index < formInputNext.length; index++){
        const input = formInputNext[index]
        formRemuveError(input);
        
        if(input.value === ""){
            formAddError(input);
            stapTwoInput[index].classList.add("test-failed");
        }  else {
            stapTwoInput[index].classList.remove("test-failed");
        }

        if( window.innerWidth < 1200 ) {
            if (index === 2) {
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
if (nextStapTwoButtonElement) {
    nextStapTwoButtonElement.addEventListener("click", formnext);
}

const formStapTwoInputBugFix = function (e) {
    
    if (e.target.classList.contains("error")) {
        e.target.classList.remove("error");

        for (let index = 0; index < formInputNext.length; index++){
            const input = formInputNext[index];

            if (e.target === input) {
                stapTwoInput[index].classList.remove("test-failed");
            }
        }
    }
}

for (let index = 0; index < formInputNext.length; index++){
    const input = formInputNext[index];
    input.addEventListener("input", formStapTwoInputBugFix);
}

/*Form stapThree*/

const nextStapThreeButtonElement = document.querySelector(".button__prev--stap-three");
const formInputStapThree = document.querySelectorAll(".input--stap-three");
const inputStapThreeError = document.querySelectorAll(".input-stapthree-error");

let stapThreeInput = []

const stapThreeFormSend = function(e) {
    e.preventDefault();

    for (let index = 0; index < inputStapThreeError.length; index++) {
        stapThreeInput.push(inputStapThreeError[index]);
    }
    
    for (let index = 0; index < formInputStapThree.length; index++){
        const input = formInputStapThree[index]
        formRemuveError(input);

        if(input.value === ""){
            formAddError(input);
            stapThreeInput[index].classList.add("test-failed");
        }  else {
            stapThreeInput[index].classList.remove("test-failed");
        }

        if (input.classList.contains("input--telefon-stap-three")){
            if(isTel(input)){
                formRemuveError(input);
                stapThreeInput[index].classList.remove("test-failed");
                
            } else {
                formAddError(input);
                stapThreeInput[index].classList.add("test-failed");
            } 
        }    
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

    function isTel(input){
        return/^([0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2})$/.test(input.value);   
    }   
}

if (nextStapThreeButtonElement) {
    nextStapThreeButtonElement.addEventListener("click", stapThreeFormSend);
}

const formStapThreeInputBugFix = function (e) {
    
    if (e.target.classList.contains("error")) {
        e.target.classList.remove("error");

        for (let index = 0; index < formInputStapThree.length; index++){
            const input = formInputStapThree[index];

            if (e.target === input) {
                stapThreeInput[index].classList.remove("test-failed");
            }
        }
    }
}

for (let index = 0; index < formInputStapThree.length; index++){
    const input = formInputStapThree[index];
    input.addEventListener("input", formStapThreeInputBugFix);
}

/*form-contact*/

const contactButtonElement = document.querySelector(".button--contact");
const formInputContact = document.querySelectorAll(".input--contact");
const inputContactError = document.querySelectorAll(".input-contact-error");

let contactInput = [];

const contactFormsend = function(e) {
    e.preventDefault(); 

    for (let index = 0; index < inputContactError.length; index++) {
        contactInput.push(inputContactError[index]);
        console.log("hi");
    }

    for (let index = 0; index < formInputContact.length; index++){
        const input = formInputContact[index]
        formRemuveError(input);

        if(input.value === ""){
            formAddError(input);
            contactInput[index].classList.add("test-failed");
        } else {
            contactInput[index].classList.remove("test-failed");
        }

        if (input.classList.contains("input--contact-telefon")){
            if(isTel(input)){
                formRemuveError(input);
                contactInput[index].classList.remove("test-failed");
                
            } else {
                formAddError(input);
                contactInput[index].classList.add("test-failed");
                console.log(contactInput[index]);
            } 
        }    
    }
    
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    
    function formRemuveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
    }

    function isTel(input){
        return/^([0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2})$/.test(input.value);   
    }   
}

const formContactInputBugFix = function (e) {
    
    if (e.target.classList.contains("error")) {
        e.target.classList.remove("error");

        for (let index = 0; index < formInputContact.length; index++){
            const input = formInputContact[index];

            if (e.target === input) {
                contactInput[index].classList.remove("test-failed");
            }
        }
    }
}

if (contactButtonElement) {
    contactButtonElement.addEventListener("click", contactFormsend); 
}

for (let index = 0; index < formInputContact.length; index++){
    const input = formInputContact[index];
    input.addEventListener("input", formContactInputBugFix);
}