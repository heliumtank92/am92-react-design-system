export default DsRadio;
declare class DsRadio extends PureComponent<any, any, any> {
    static propTypes: {
        label: any;
        labelPlacement: any;
    };
    static defaultProps: {
        labelPlacement: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { PureComponent } from "react";
