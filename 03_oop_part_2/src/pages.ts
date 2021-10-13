import { Page } from "./page";
import { PagesIterableMixin } from "./PagesIterableMixin";

export class PagesBase {
    private pages: Page[];
    
    constructor(pages: Page[]) {
        this.pages = pages;
    }

    public get length() :number {
        return this.pages.length;
    }

}

export const Pages = PagesIterableMixin(PagesBase);
// export type Pages =  typeof Pages;