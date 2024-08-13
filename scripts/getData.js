import { ACCESS_KEY, API_URL_PHOTOS } from "./const.js";

export const getData = async ({ count, page, id }) => {
  const url = new URL(API_URL_PHOTOS);

  url.searchParams.set("client_id", ACCESS_KEY);

  if (count && page) {
    url.searchParams.append("per_page", count);
    url.searchParams.append("page", page);
  }

  if (id) {
    url.pathname += `/${id}`;
  }

  const headers = {};
  if (localStorage.getItem("token")) {
    headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return fetch(url, { headers })
    .then((data) => data.json())
    .catch((err) => console.log(`Возникла ошибка ${err}`));
};
