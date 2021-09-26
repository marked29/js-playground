import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) : number {
        
        const firstItemWeight = first.weight;
        const secondItemWeight = second.weight;

        if (firstItemWeight > secondItemWeight) {
            return 1;
        } else if (firstItemWeight < secondItemWeight) {
            return -1;
        } else {
            return first.compareTo(second);
        }
    }
}
