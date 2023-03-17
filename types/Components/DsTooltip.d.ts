export default DsTooltip;
declare class DsTooltip extends PureComponent<any, any, any> {
    static propTypes: {
        heading: any;
        description: any;
        buttonGroup: any;
    };
    static defaultProps: {};
    constructor(props: any);
    constructor(props: any, context: any);
    renderTitle: () => any;
    render(): JSX.Element;
}
import { PureComponent } from "react";
