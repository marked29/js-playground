import { Item } from "./Item";

export abstract class Consumable extends Item {
    private _spoiled: boolean;
    private _consumed: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this._spoiled = spoiled;
        this._consumed = false;
    }

    public eat() : string {
        return `You eat ${this.name}.`
    }
    
    public use(): string {
        if (!this.isConsumed() && !this.isSpoiled())
            return this.eat();
        else if (this.isConsumed())
            return `There is nothing left of the ${this.name} to consume.`
        else
            return this.eat()+`You feel sick.`
    }

    public isConsumed(): boolean {
        return this._consumed;
    }
    
    public setConsumed(consumed: boolean): void {
        this._consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this._spoiled;
    }
}