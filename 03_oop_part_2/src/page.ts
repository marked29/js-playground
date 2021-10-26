export type PageType = 'with text' | 'with article' | 'with images';
export type PageMaterial = 'simple paper' | 'glossy paper';

export class Page {
    constructor(public pageNumber: number, public pageType: PageType, public pageMaterial: PageMaterial) { }
}
