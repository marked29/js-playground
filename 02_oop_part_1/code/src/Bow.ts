import { Weapon } from "./Weapon";

export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }
    
    public polish(): void {
        this.baseDurability += this.MODIFIER_CHANGE_RATE;
    }
}