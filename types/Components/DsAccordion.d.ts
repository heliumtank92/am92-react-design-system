export default DsAccordion;
declare class DsAccordion extends PureComponent<any, any, any> {
    static propTypes: {
        header: any;
        summary: any;
        expandIcon: any;
    };
    static defaultProps: {
        expandIcon: JSX.Element;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { PureComponent } from "react";
