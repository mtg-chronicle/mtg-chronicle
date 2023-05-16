export class Viewsize {

    static readonly DEFAULT = 'viewsize--default';
    static readonly SMALL = 'viewsize--small';

    readonly categories = {
        default: Viewsize.DEFAULT,
        small: Viewsize.SMALL
    };

    category: string = Viewsize.DEFAULT;

    constructor();
    constructor(cate: string);
    constructor(cate?: string) {
        this.category = cate || Viewsize.DEFAULT;
    }

    match(cate: string): boolean {
        return this.category === cate;
    }
}
