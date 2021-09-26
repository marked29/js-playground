import { Comparable } from './Comparable';

let id = 0;
let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
    private _id: number;
    private _value: number;
    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _weight: number;
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
 

    public constructor(name: string, value: number, weight: number) {
        this._id = id++;
        this._value = value;
        this._name = name;
        this._weight = weight;
        numberOfItems++;
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
    public reset(): void { numberOfItems = 0;}
}
