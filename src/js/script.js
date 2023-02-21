const openButtonElement = document.querySelector(".button--menu");
const openButtonClickHandler = function() {
    
    openButtonElement.classList.toggle("button--open");       
}
openButtonElement.addEventListener(openButtonClickHandler);
