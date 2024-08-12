import { createCardPhoto } from "./createCardPhoto.js";
import { getData } from "./getData.js";

export const scrollLoad = (gallery, grid, endElem) => {
  const observer = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting) {
        console.log("Я тебя вижу", entries);
        const photos = await getData();
        const cards = photos.map((photo) => {
          return createCardPhoto(photo);
        });
        Promise.all(cards).then((cards) => {
          gallery.append(...cards);
          grid.appended(cards);
        });
      }
    },
    {
      rootMargin: "150px",
    }
  );

  observer.observe(endElem);
};
