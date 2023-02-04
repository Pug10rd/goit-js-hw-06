const input = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

input.addEventListener('input', changeSize);

text.style.fontSize = "16px";

function changeSize() {
    text.style.fontSize = `${input.value}px`;
}

console.log(text);