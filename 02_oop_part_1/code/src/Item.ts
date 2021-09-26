import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private _id: number;
    private _value: number;
    private _name: string;
    private _weight: number;
 

    public constructor(name: string, value: number, weight: number) {
        this._id = id++;
        this._value = value;
        this._name = name;
        this._weight = weight;
    }

    public compareTo(other: Item): number {
        let result: number;
        
        if (this._value > other._value) {
            result = 1 
        } else if (this._value < this._value) {
            result = -1
        } else {
            result = this._name.toLowerCase() > other._name.toLowerCase() ? 1 : -1;
        }

        return result;
    }
    public toString(): string {
        return `${this._name} - Value: ${this._value}, Weight: ${this._weight}`;
    }

    public use(): void { }
    public reset(): void { id = 0; }
}
