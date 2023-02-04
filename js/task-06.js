const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const currentLength = input.value.length;
    const inputDataLength = input.dataset.length;
    if (currentLength == inputDataLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add('invalid');
        input.classList.remove("valid");
}
};