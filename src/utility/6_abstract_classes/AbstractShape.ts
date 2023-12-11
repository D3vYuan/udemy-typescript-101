export abstract class Shape {
  constructor(private _x: number, private _y: number) {}

  set x(x: number) {
    this._x = x;
  }

  get x(): number {
    return this._x;
  }

  set y(y: number) {
    this._y = y;
  }

  get y(): number {
    return this._y;
  }

  getInfo(): string {
    return `x=${this._x}, y=${this._y}`;
  }

  abstract calculateNumber(): number;
}
