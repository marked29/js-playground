import { Item } from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
    constructor(private title: string, private author: string, private artist: string, private pages: Pages) {
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

    public getArtist(): string {
        return this.artist;
    }

    public setArtist(artist: string): void {
        this.artist = artist;
    }

    public getNumberOfPages(): number {
        return this.pages.length;
    }

    public toString(): string {
        return `Comics: ${this.getTitle()} by ${this.getAuthor()}, the artist is ${this.getArtist()}, with number of pages: ${this.getNumberOfPages()}`;
    }
}
