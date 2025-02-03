class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.newItem = newItem;
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    if (this.#items.indexOf(itemToRemove) !== -1) {
      return this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    } else {
      return console.log('Element not found');
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
