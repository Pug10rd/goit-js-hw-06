// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fieldIngredients = document.querySelector('#ingredients');

const ar2 = [];

for (let item of ingredients) {
  
  const ali = document.createElement('li');
  ali.classList.add('item');
  ali.textContent = item;
  ar2.push(ali);
  //array.append(ali);

};

fieldIngredients.append(...ar2);

