import { createElem } from "./createElem.js";

export const renderPhoto = (photoWrapper, photo) => {
  console.log(photo);
  const photoPicture = new Image();
  photoPicture.className = "photo__picture";
  photoPicture.src = photo.urls.regular;
  photoPicture.alt = photo.location?.name || "";
  photoPicture.style.maxHeight = "80vh";

  const photoAuthorLink = createElem("a", {
    className: "photo__author",
    href: photo.user.links.html,
  });

  const photoAuthorImg = new Image();
  photoAuthorImg.loading = "lazy";
  photoAuthorImg.src = photo.user.profile_image.medium;
  photoAuthorImg.alt = photo.user.bio;
  photoAuthorImg.title = photo.user.name;

  const userName = createElem("span", { textContent: photo.user.name });

  const photoControl = createElem("div", { className: "photo__control" });

  const buttonLikes = createElem("button", {
    id: photo.id,
    className: "photo__like",
    textContent: photo.likes,
  });

  const downloadLink = createElem("a", {
    className: "photo__download",
    download: true,
    target: "_blank",
    href: photo.urls.regular,
  });

  photoWrapper.append(photoPicture, photoAuthorLink, photoControl);
  photoAuthorLink.append(photoAuthorImg, userName);
  photoControl.append(buttonLikes, downloadLink);

  console.log("photoWrapper: ", photoWrapper);
};
