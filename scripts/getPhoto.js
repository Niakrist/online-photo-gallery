export const getPhoto = async (id) => {
  console.log("id: ", id);
  const response = await fetch("http://127.0.0.1:5500/data.json");
  const data = await response.json();
  const photo = await data.find((photo) => photo.id === id);
  return photo;
};
