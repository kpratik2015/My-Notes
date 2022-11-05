const hexToRgb = (hexStr) => {
    const r = parseInt(hexStr.slice(1,3), 16);
    const g = parseInt(hexStr.slice(3,5), 16);
    const b = parseInt(hexStr.slice(5,7), 16);
    return { r, g, b };
}

console.log(hexToRgb("#ff33ff"))

/** Enhancement */
// #fff shortforms can be converted to long forms by repeating each character twice
// #f3f => #ff33ff

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}