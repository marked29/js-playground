import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    private _numberOfSlices: number;
    private _eatenSlices: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('pizza', 0, 0, spoiled);
        this._numberOfSlices = numberOfSlices;
        this._eatenSlices = 0;
    }

    public eat() : string {
        if (this._eatenSlices < this._numberOfSlices) {
            this._eatenSlices++;

            if (this._eatenSlices >= this._numberOfSlices) {
                this.setConsumed(true);
            }

            return "You eat a slice of the pizza";
        } else {

            return "";
        }
    }
}