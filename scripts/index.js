import { authorization } from "./authorization.js";
import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";
import { handlerLike } from "./handlerLike.js";

const init = async ({
  selectorGalleryWrapper,
  selectorPhotoWrapper,
  selectorAuthBtn,
}) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoWrapper);
  const authBtn = document.querySelector(selectorAuthBtn);

  authorization(authBtn);

  if (galleryWrapper) {
    const photos = await getData({ count: 30 });
    renderGallery(galleryWrapper, photos);
  }

  if (photoWrapper) {
    const url = new URL(location.href);
    const id = url.searchParams.get("photo");
    if (id) {
      const photo = await getData({ id });
      const buttonLikes = renderPhoto(photoWrapper, photo);

      buttonLikes.addEventListener("click", () => {
        if (localStorage.getItem("token")) {
          handlerLike(buttonLikes);
        }
      });
    }
  }
};

init({
  selectorGalleryWrapper: ".gallery__wrapper",
  selectorPhotoWrapper: ".photo__wrapper",
  selectorAuthBtn: ".header__login-button",
});
