const input = document.querySelector("input");
const priceTag = document.querySelector(".price");
function setBackgroundSize(input) {
  input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
}

setBackgroundSize(input);

input.addEventListener("input", () => {
    setBackgroundSize(input);
    const price = input.value * 16;
    priceTag.innerHTML = `${price}$`;
});

function getBackgroundSize(input) {
  const min = +input.min || 0;
  const max = +input.max || 100;
  const value = +input.value;

  const size = (value - min) / (max - min) * 100;

  return size;
}
