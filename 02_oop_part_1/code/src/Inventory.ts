import { ItemComparator } from './ItemComparator';
import { Item } from "./Item";

export class Inventory {
    private items: Array<Item> =[];

    public addItem(item:Item): void {
        this.items.push(item);
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: any) : void{
        if (typeof (comparator) === 'undefined') {
            this.items.sort();
        } else {
            this.items.sort(comparator.compare);
        }
    }

    public toString(): string {
        return `${this.items.join(', ')}`;
    }
}