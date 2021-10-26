import { Page, PageType, PageMaterial } from './Page';

export class PageFactory {
    pageNumber = 1;

    create(type: PageType): Page {
        const material: PageMaterial = type === 'with text' ? 'simple paper' : 'glossy paper';
        const page = new Page(this.pageNumber, type, material);
        this.pageNumber += 1;

        return page;
    }
}
