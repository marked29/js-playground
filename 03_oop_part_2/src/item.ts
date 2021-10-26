import { PagesIterable } from './PagesIterableMixin';

export abstract class Item {
    abstract toString(): string;

    [Symbol.iterator]() { }
}

Object.assign(Item.prototype, PagesIterable);
