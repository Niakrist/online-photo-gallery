import { API_URL } from "./const.js";

export const getUserData = async () => {
  return fetch(API_URL + "/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((respone) => respone.json())
    .catch((err) => console.log(err));
};
