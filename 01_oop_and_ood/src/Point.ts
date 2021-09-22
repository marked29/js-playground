export class Point {
    private _x: number;
    private _y: number;

    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    
    public constructor();
    public constructor(x: number, y: number)
    public constructor(x?: any, y?: any) {
        if (typeof x === 'number' && typeof y === 'number') {
            this._x = x;
            this._y = y;
        } else {
            this._x = 0;
            this._y = 0;
        }

    }
    
    public toString = (): string => {
        return `(${this._x}, ${this._y})`;
    }

    public distance(x: Point);
    public distance(x: number, y: number);
    public distance(x?: any, y?: any): number {

        if (typeof x === 'number' && typeof y === 'number') {
            return Math.sqrt(Math.ceil(Math.pow(x - this._x, 2) + Math.pow(y - this._y, 2)));
        } else if (typeof x === 'object') {
            return Math.sqrt(Math.ceil(Math.pow(x.x - this._x, 2) + Math.pow(x.y - this._y, 2)));
        } else {
            return Math.sqrt(Math.ceil(Math.pow(this._x, 2) + Math.pow(this._y, 2)));
        }
    }
}
