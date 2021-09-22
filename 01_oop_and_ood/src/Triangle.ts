import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(pointA : Point, pointB: Point, pointC: Point, color?: string, filled?: boolean) {
        super([pointA, pointB, pointC], color, filled);
    }

    public getType(): string {
        const sidesLength: Array<number> = [
            this._points[0].distance(this._points[1]),
            this._points[1].distance(this._points[2]),
            this._points[2].distance(this._points[0]),
        ].sort();

        if (sidesLength[0] === sidesLength[2])
            return "equilateral triangle";
        else if (sidesLength[1] === sidesLength[2] || sidesLength[0] === sidesLength[1])
            return "isosceles triangle";
        else
            return 'scalene triangle';
    }

    public toString(): string {
        return `Triangle[v1=${this._points[0]},v2=${this._points[1]},v3=${this._points[2]}]`;
    }
}
