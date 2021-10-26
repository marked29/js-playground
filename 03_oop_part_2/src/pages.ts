import { Page } from "./page";

export class Pages {

    constructor(private pages: Page[] = []) { }

    public get(i: number): Page {
        return this.pages[i];
    }

    public get length(): number {
        return this.pages.length;
    }

}