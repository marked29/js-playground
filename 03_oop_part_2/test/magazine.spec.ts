import { Magazine } from '../src/Magazine';
import { Pages } from '../src/Pages';
import { Page } from '../src/Page';

describe('Magazine', () => {
    let sut: Magazine;
    let pages: Page[];

    beforeEach(() => {
        const factory = new PageFactory();
        pages = [factory.create('with article'), factory.create('with article')];
        sut = new Magazine('G.Q', new Pages(pages));
    });

    describe('toString', () => {
        it('should return expected', () => {
            const expected = 'Magazine: G.Q with number of pages: 2';
            expect(sut.toString()).toBe(expected);
        });
    });

    describe('for ... of', () => {
        let stub: jasmine.Spy;

        beforeEach(() => {
            stub = jasmine.createSpy('stub');
        });

        it('should call stub 2 times', () => {
            for (let page of sut) {
                stub(page);
            }
            expect(stub.calls.count()).toBe(2);
        });

        it('should call stub 2 times with values', () => {
            for (let page of sut) {
                stub(page);
            }
            pages.forEach((page, i) => {
                expect(stub.calls.argsFor(i)).toEqual([page]);
            });
        });
    });

    describe('paper', () => {
        it('should have a glossy pager', () => {
            expect(pages[0].pageMaterial).toBe('glossy paper');
        });

        it('should be with article', () => {
            expect(pages[0].pageType).toBe('with article');
        });
    });
});
