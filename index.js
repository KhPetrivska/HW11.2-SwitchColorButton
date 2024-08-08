"use strict";
const textBlock = document.createElement("p");
textBlock.textContent = `There is a text block on the page and a button.
When the button is clicked, the text changes color.
When the button is clicked again, the color returns to the previous one.`;
document.body.append(textBlock);

const button = document.createElement("button");
button.textContent = "Switch color";
document.body.append(button);
button.style.color = "black";

function changeColor(item, switcher) {
  switcher.onclick = () => {
    if (item.style.color === "red") {
      item.style.color = "black";
    } else {
      item.style.color = "red";
    }
  };
}

changeColor(textBlock, button);