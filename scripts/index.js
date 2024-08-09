import { getData } from "./getData.js";
import { renderGallery } from "./renderFallery.js";

const init = async () => {
  const photos = await getData();
  renderGallery(photos);
};

init();
