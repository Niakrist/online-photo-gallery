import { createCardPhoto } from "./createCardPhoto.js";
import { createElem } from "./createElem.js";
import { scrollLoad } from "./scrollLoad.js";

export const renderGallery = (wrapper, photos) => {
  const gallery = createElem("ul", { className: "grid" });

  const cards = photos.map((photo) => {
    return createCardPhoto(photo);
  });

  const endElem = createElem("div");

  wrapper.append(gallery);

  const grid = new Masonry(gallery, {
    itemSelector: ".card",
    columnWidth: 200,
    gutter: 10,
    isFitWidth: true,
  });

  Promise.all(cards).then((cards) => {
    gallery.append(...cards);
    grid.appended(cards);
    wrapper.append(endElem);
    scrollLoad(gallery, grid, endElem);
  });
};
