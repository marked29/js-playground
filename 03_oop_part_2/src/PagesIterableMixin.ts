import { Page } from "./page";

type Constructor = new (...args: any[]) => {};

export function PagesIterableMixin<TBase extends Constructor>(Base: TBase) {
  return class PagesIterableMixin extends Base {
      [x: string]: Generator<Page, any, unknown>;

     *[Symbol.iterator](): Generator<Page> {
        console.log({ obj: this });
        yield* this.pages;
      };
  };
}

