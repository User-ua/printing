const formBlockFile = document.querySelector(".form-block__file");

export function upload(selector, options = {}) {
   const input = selector;

   let files = []; 

   const previevWrapper = document.querySelector(".previev--wrapper");

   const previev = document.createElement("div");
   previev.classList.add("previev");

   const open = document.createElement("div");
   open.classList.add("button", "button--upload");
   open.textContent = `Выберите файл`;
   
   if (options.multi) {
       input.setAttribute('multiple', true)
   }

   if (options.accept && Array.isArray(options.accept)) {
       input.setAttribute('accept', options.accept.join(','))
   }

   input.insertAdjacentElement(`beforebegin`, open);
   previevWrapper.insertAdjacentElement(`afterend`, previev);
   
   const triggerInput = function() {
       input.click()
   }

   const changeHandler = function (e) {
    if(!e.target.files.length) {
        return;
    }
    formBlockFile.classList.remove("test-failed", "form-block-test");
    
    files = Array.from(e.target.files);
    
    previev.innerHTML = ''
    
    files.forEach(file => {
        console.log(file)
        if (file.type.match('image')) {
            const reader = new FileReader();
            reader.onload = e => {
                const src = e.target.result;
                previev.insertAdjacentHTML('beforeend', `
                <div class="previev--image">
                    <div class="previev-remove" data-name="${file.name}">&times;</div>
                    <img src="${src}" alt="${file.name}"/>
                    <div class="previev-info">
                        <span>${file.name}</span>
                        ${file.size}
                    </div>
                </div>`);
            }
            reader.readAsDataURL(file);
        }
        
    })
    
}
    const removeHendler = function(e) {
    if (!e.target.dataset.name) {
        return;
    }
    const {name} = e.target.dataset;

    files = files.filter(file => file.name !== name);

    const block = previev
    .querySelector(`[data-name="${name}"]`)
    .closest(".previev--image");
    block.classList.add("removing");
    setTimeout(() => block.remove(), 300);
    if (files.length > 0) {
        formBlockFile.classList.remove("test-failed");
    } else {
        formBlockFile.classList.add("test-failed", "form-block-test");
    }
}

    open.addEventListener('click', triggerInput);
    input.addEventListener ('change', changeHandler);
    previev.addEventListener('click', removeHendler);
}


/*const openButtonElement = document.querySelector(".button--menu");
const openButtonClickHandler = function() {
    
    openButtonElement.classList.toggle("button--open");       
}
openButtonElement.addEventListener(openButtonClickHandler);*/
