export default DsTag;
declare class DsTag extends PureComponent<any, any, any> {
    static propTypes: {
        label: any;
        value: any;
        selected: any;
    };
    static defaultProps: {
        selected: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { PureComponent } from "react";
