class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.spliter = this.#value.split('');
    this.spliter.splice(this.spliter.length, 0, str);
    this.#value = this.spliter.join('');
    return this.#value;
  }
  padStart(str) {
    this.spliter = this.#value.split('');
    this.spliter.splice(0, 0, str);
    this.#value = this.spliter.join('');
    return this.#value;
  }
  padBoth(str) {
    this.spliter = this.#value.split('');
    this.spliter.splice(this.spliter.length, 0, str);
    this.spliter.splice(0, 0, str);
    this.#value = this.spliter.join('');
    return this.#value;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
