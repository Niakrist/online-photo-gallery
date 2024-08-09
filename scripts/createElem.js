export const createElem = (tags, attrs) => {
  const elem = document.createElement(tags);

  Object.assign(elem, attrs);

  // for (const attr in attrs) {
  //   elem[attr] = attrs[attr];
  // }
  return elem;
};
