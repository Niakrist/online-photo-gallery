import {
  ACCESS_KEY,
  API_URL_PHOTOS,
  REDIRECT_URI,
  SECRET_KEY,
} from "./const.js";

export const handlerLike = async (buttonLikes) => {
  const toggleLike = (data) => {
    if (data.photo.liked_by_user) {
      buttonLikes.classList.remove("photo__like_o");
    } else {
      buttonLikes.classList.add("photo__like_o");
    }
    buttonLikes.likerdByUser = data.photo.liked_by_user;
    buttonLikes.textContent = data.photo.likes;
  };

  const url = new URL(`${API_URL_PHOTOS}/${buttonLikes.id}/like`);

  return fetch(url, {
    method: buttonLikes.likerdByUser ? "DELETE" : "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => toggleLike(data));
};
