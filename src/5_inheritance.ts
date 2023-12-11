import { Shape } from "./utility/5_inheritance/Shape";
import { Circle } from "./utility/5_inheritance/Circle";
import { Rectangle } from "./utility/5_inheritance/Rectangle";

// -- Case #1 --

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

console.log("--");

// -- Case #2 --

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());

console.log("--");

// -- Case #3 --
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
  console.log(shape.getInfo());
}

console.log("--");
