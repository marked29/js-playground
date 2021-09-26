import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        
        const firstItemWeight = first.getWeight();
        const secondItemWeight = second.getWeight();

        if (firstItemWeight > secondItemWeight) {
            return 1;
        } else if (firstItemWeight < secondItemWeight) {
            return -1;
        } else {
            return first.compareTo(second);
        }

    }
}
