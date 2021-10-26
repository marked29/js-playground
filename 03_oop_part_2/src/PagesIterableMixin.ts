import { Page } from './page';
import { Pages } from './pages';

export const PagesIterable = {
  pages: new Pages([]),

  [Symbol.iterator]: function* (): Generator<Page, void, Page> {
    let i = 0;
    let page: Page;
    while ((page = this.pages.get(i))) {
      i += 1;
      yield page;
    }
  },
};
