import { PagesBase } from './pages';


// properties: “pages”, “title”, “author”
// setters and getters for “title” and “author”
// “toString” -> “Book: {book title} by {author} with number of pages: {number}”
// “pages” property keeps instance of Pages class
    //   expect(page.toString()).toEqual(`Book: Harry Potter by J. K. Rowling with number of pages: 4, here is page with text #${counter} and it\'s material is simple paper`);


import { Pages } from "./pages";
import { PagesIterableMixin } from "./PagesIterableMixin";

export class BookBase {
    private title: String;
    private author: String;
    private pages: PagesBase;

    constructor(title: String, author: String, pages: PagesBase) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    public toString(): string {
        return `Book:${this.title} by ${this.author} with number of pages: ${this.pages.length}, here is page with text #${this.pages} `
    }
    
}

export const Book = PagesIterableMixin(BookBase);
// export type Book =  typeof Book;