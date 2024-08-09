export const getData = () => {
  return fetch("http://127.0.0.1:5500/data.json")
    .then((data) => data.json())
    .catch((err) => console.log(`Возникла ошибка ${err}`));
};
