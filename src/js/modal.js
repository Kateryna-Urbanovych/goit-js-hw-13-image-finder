// refs.gallery.addEventListener("click", onGalleryClick);

// function onGalleryClick({ target: { nodeName, dataset } }) {
//   if (nodeName !== "IMG") return;
//   const instance = basicLightbox.create(`
//     <img src="${dataset.src}">
// `);
//   instance.show();
// }




// refs.cardsContainer.addEventListener('click', onOpenModal);
// function onOpenModal(e) {
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   const largeImageURL = `<img src= ${e.target.dataset.source}>`;
//   basicLightbox.create(largeImageURL).show();
// }




// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// function onOpenModal(evt) {
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }

//   evt.preventDefault(); //отмена перехода по ссылке
//   const imageToShow = `<img src= ${evt.target.dataset.source}>`;
//   console.log(imageToShow);
//   const instance = basicLightbox.create(imageToShow);
//   instance.show();
// }

// export { onOpenModal };