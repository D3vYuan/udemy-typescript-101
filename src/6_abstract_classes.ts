import { Shape } from "./utility/6_abstract_classes/AbstractShape";
import { Rectangle } from "./utility/6_abstract_classes/RectangleImpl";
import { Circle } from "./utility/6_abstract_classes/CircleImpl";

let shapes: Shape[] = [];

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
  console.log(shape.getInfo());
  console.log(`Area: ${shape.calculateNumber()}`);
}

console.log("--");
