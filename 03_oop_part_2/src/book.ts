import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
    constructor(private title: string, private author: string, private pages: Pages) {
        super();
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public getNumberOfPages(): number {
        return this.pages.length;
    }

    public toString(): string {
        return `Book: ${this.getTitle()} by ${this.getAuthor()} with number of pages: ${this.getNumberOfPages()}`;
    }
}
