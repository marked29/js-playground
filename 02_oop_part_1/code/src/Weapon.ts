// your code goes here
import { Item } from "./Item";

export abstract class Weapon extends Item {
    public MODIFIER_CHANGE_RATE: number = 0.5;

    private _baseDamage: number;
    private _damageModifier: number = 0;
    private _baseDurability: number;
    private _durabilityModifier: number = 0;
    
    public get baseDamage(): number {
        return this._baseDamage;
    }
    public set baseDamage(value: number) {
        this._baseDamage = value;
    }
    
    public get damageModifier(): number {
        return this._damageModifier;
    }
    public set damageModifier(value: number) {
        this._damageModifier = value;
    }

    public get baseDurability(): number {
        return this._baseDurability;
    }
    public set baseDurability(value: number) {
        this._baseDurability = value;
    }

    public get durabilityModifier(): number {
        return this._durabilityModifier;
    }
    public set durabilityModifier(value: number) {
        this._durabilityModifier = value;
    }
    
    public constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this._baseDamage = baseDamage;
        this._baseDurability = baseDurability
    }

    public polish(): void { };

    public use(): string {

        if (this._baseDurability <= 0) {
            return `You can't use the ${this.name}, it is broken`;
        }

        this._baseDurability = this._baseDurability - this.MODIFIER_CHANGE_RATE;

        let usageResult = `You use the ${this.name}, dealing of ${this.getDamage()} damage. `;        
        if (this._baseDurability <= 0) {
            usageResult += `The ${this.name} breaks`;
        }

        return usageResult;
    };

    public getDamage(): number {
        return this._baseDamage + this._damageModifier;
    }

    public getDurability(): number {
        return this._baseDurability + this._durabilityModifier;
    }

    public toString(): string {
        return super.toString()+" "+`Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`
    }

    
}