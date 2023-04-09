// A Constructor Shape is created.
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  build() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  build() {
    return `<rect width="300" height="200" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  build() {
    return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Constructor Shape is exported from the file.
module.exports = { Triangle, Square, Circle };
