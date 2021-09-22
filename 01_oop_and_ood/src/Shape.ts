import { Point } from "./Point";

export abstract class Shape {
    protected _points: Array<Point>
    protected _color: string;
    protected _filled: boolean;

    constructor(points: Array<Point>, color: string, filled: boolean);
    constructor(points: Array<Point>, color: string = 'green', filled: boolean = true) {
        if (points.length < 3) {
            throw 'Use 3 points to create a shape';
        }
        this._points = points;
        this._color = color;
        this._filled = filled;
    }

    public toString(): string {
        return `A Shape with color of ${this._color} and ${this._filled ? "" : 'not '}filled. Points: ${this._points.join(', ')}.`
    }

    public getPerimeter() : number {
        let perimeter : number = 0;
        
        for (let index : number = 0; index < this._points.length; index++) {
            if (index + 1 === this._points.length)
                perimeter += this._points[index].distance(this._points[0]);
            else
                perimeter += this._points[index].distance(this._points[index+1]);
        }

        return perimeter;
    }

    abstract getType(): string;
}
