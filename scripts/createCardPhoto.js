import { createElem } from "./createElem.js";

const loadImage = (url, description) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.width = "200";
    image.src = url;
    image.alt = description;
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (err) => reject(err));
  });
};

export const createCardPhoto = async (data) => {
  const card = createElem("li", {
    className: "card",
  });

  const cardItem = createElem("a", {
    id: data.id,
    className: "grid-item",
    href: `page.html?photo=${data.id}`,
  });

  const photo = await loadImage(data.urls.small, data.description);

  const author = createElem("a", {
    className: "card__author",
    href: data.user.links.html,
  });

  const avatarAuthor = new Image();
  avatarAuthor.className = "author__photo";
  avatarAuthor.src = data.user.profile_image.medium;
  avatarAuthor.width = "32";
  avatarAuthor.height = "32";
  avatarAuthor.alt = data.user.bio;
  avatarAuthor.title = data.user.username;

  const likeBtn = createElem("button", {
    className: "card__photo-like",
    textContent: data.likes,
  });

  const downloadLink = createElem("a", {
    className: "card__download",
    href: data.links.download,
    download: true,
    target: "_blank",
  });

  author.append(avatarAuthor);
  cardItem.append(photo, author, likeBtn, downloadLink);
  card.append(cardItem);

  return card;
};
