import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery")


function makeItemMarkup({preview,description,original} = {}){
   return `<div class="gallery__item">
   <a class-"gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
   </a>
   </div>`
}

function makeGallery(selector){
    let markup = galleryItems
                            .map(makeItemMarkup)
                            .join("");
    selector.insertAdjacentHTML("beforeend",markup);

}

makeGallery(gallery);


const picHandler = (event) => {
    event.preventDefault();
    console.log(event.target.alt);// target where click was detected
    console.log(event.currentTarget); // target where listener is added
    console.log(event.target.dataset.source)// data-source attr

    if(event.target.nodeName !== "IMG") return;

   // create instance of lightBox with option onClose
    let instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
        {onClose: (instance) => {
        document.removeEventListener("keyup",closeOnEscape);
    }});

    instance.show();

    // Escape key close() lightBox
    function closeOnEscape(event){
        console.log(event.key)
        if(event.key === "Escape")instance.close();   
    }

    document.addEventListener("keyup",closeOnEscape);
}

gallery.addEventListener("click",picHandler);


