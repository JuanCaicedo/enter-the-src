const createElement = (type, props) => {
  const el = document.createElement(type);
  for (let [key, value] of Object.entries(props)) {
    el.setAttribute(key, value);
  }
  return el;
};
export default createElement;
