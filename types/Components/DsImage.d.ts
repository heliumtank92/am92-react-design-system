export default class DsImage {
    static propTypes: {
        src: any;
        srcSet: any;
        alt: any;
        errorIconFontSize: any;
        errorIconClass: any;
    };
    static defaultProps: {
        src: string;
        srcSet: any[];
        alt: string;
        errorIconFontSize: string;
        errorIconClass: string;
    };
    state: {
        loadState: string;
    };
    handleLoad: (e: any) => any;
    handleError: (e: any) => any;
    hasSource: () => boolean;
    renderLoading: () => false | JSX.Element;
    renderError: () => false | JSX.Element;
    renderImageSrcSet: () => any;
    render(): JSX.Element;
}
