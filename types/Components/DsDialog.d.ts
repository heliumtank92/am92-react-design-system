export default class DsDialog extends PureComponent<any, any, any> {
    static propTypes: {
        imageSrc: any;
        imageAlt: any;
        heading: any;
        description: any;
        buttonGroup: any;
        textAlign: any;
        showClose: any;
        fullWidth: any;
    };
    static defaultProps: {
        imageSrc: string;
        imageAlt: string;
        textAlign: string;
        showClose: boolean;
        fullWidth: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { PureComponent } from "react";
