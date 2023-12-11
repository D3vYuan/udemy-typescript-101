import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(
    x: number,
    y: number,
    private _width: number,
    private _length: number
  ) {
    super(x, y);
  }

  /**
   * Getter length
   * @return {number}
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Setter length
   * @param {number} value
   */
  public set length(value: number) {
    this._length = value;
  }

  /*
   * Getter width
   * @return {number}
   */
  public get width(): number {
    return this._width;
  }

  /**
   * Setter width
   * @param {number} value
   */
  public set width(value: number) {
    this._width = value;
  }

  getInfo(): string {
    return super.getInfo() + `, length=${this._length}, width=${this._width}`;
  }
}
