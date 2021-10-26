import { Book } from '../src/Book';
import { Pages } from '../src/Pages';
import { Page } from '../src/Page';
import { PageFactory } from '../src/PageFactory';

describe('Book', () => {
    let sut: Book;
    let pages: Page[];

    beforeEach(() => {
        const factory = new PageFactory();
        pages = [
            factory.create('with text'),
            factory.create('with text'),
            factory.create('with text'),
            factory.create('with text'),
        ];
        sut = new Book('Harry Potter', 'J.K.Rowling', new Pages(pages));
    });

    describe('toString', () => {
        it('should return expected', () => {
            const expected = 'Book: Harry Potter by J.K.Rowling with number of pages: 4';
            expect(sut.toString()).toBe(expected);
        });
    });

    describe('for ... of', () => {
        let stub: jasmine.Spy;

        beforeEach(() => {
            stub = jasmine.createSpy('stub');
        });

        it('should call stub 4 times', () => {
            for (let page of sut) {
                stub(page);
            }
            expect(stub.calls.count()).toBe(4);
        });

        it('should call stub 4 times with values', () => {
            for (let page of sut) {
                stub(page);
            }
            pages.forEach((page, i) => {
                expect(stub.calls.argsFor(i)).toEqual([page]);
            });
        });
    });

    describe('paper', () => {
        it('should have a simple pager', () => {
            expect(pages[0].pageMaterial).toBe('simple paper');
        });

        it('should be with text', () => {
            expect(pages[0].pageType).toBe('with text');
        });
    });
});
