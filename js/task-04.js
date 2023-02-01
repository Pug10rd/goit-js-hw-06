// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const plusButton = document.querySelector("[data-action='increment']");

const minusButton = document.querySelector("[data-action='decrement']");

const spanKey = document.getElementById('value');

let counterValue = 0;

plusButton.addEventListener('click', plusButtonHandler, )

function plusButtonHandler() {
    counterValue += 1;
    spanKey.textContent = counterValue.toString();
    console.log(counterValue);
};

minusButton.addEventListener('click', minusButtonHandler);

function minusButtonHandler() {
    counterValue -= 1;
    spanKey.textContent = counterValue.toString();
    console.log(counterValue);
};