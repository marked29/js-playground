import { Weapon } from "./Weapon";

export abstract class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }
    
    public polish(): void {
        this.baseDamage += this.MODIFIER_CHANGE_RATE;
    }
}