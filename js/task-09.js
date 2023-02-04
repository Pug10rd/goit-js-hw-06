function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.


let bkgColor = document.querySelector('.color');

const btn = document.querySelector('.change-color');

btn.addEventListener('click', changeBtn);

function changeBtn() {
  //bkgColor.style.backgroundColor = `${getRandomHexColor}`;
  console.log(bkgColor);
  const color = getRandomHexColor();
  bkgColor.textContent = color;
  document.body.style.backgroundColor = color;
};

console.log(bkgColor);
