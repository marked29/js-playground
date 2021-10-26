import { Item } from './Item';
import { Pages } from './Pages';

export class Magazine extends Item {
    constructor(private title: string, private pages: Pages) {
        super();
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getNumberOfPages(): number {
        return this.pages.length;
    }

    public toString(): string {
        return `Magazine: ${this.getTitle()} with number of pages: ${this.getNumberOfPages()}`;
    }
}
