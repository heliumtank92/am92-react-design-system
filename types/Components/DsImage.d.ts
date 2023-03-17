export default class DsImage extends PureComponent<any, any, any> {
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
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        loadState: string;
    };
    handleLoad: (e: any) => void;
    handleError: (e: any) => void;
    hasSource: () => boolean;
    renderLoading: () => false | JSX.Element;
    renderError: () => false | JSX.Element;
    renderImageSrcSet: () => any;
    render(): JSX.Element;
}
import { PureComponent } from "react";
