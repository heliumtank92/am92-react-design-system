export default DsSwitch;
declare class DsSwitch extends PureComponent<any, any, any> {
    static propTypes: {
        name: any;
        value: any;
        positiveValue: any;
        negativeValue: any;
        onChange: any;
    };
    static defaultProps: {
        value: boolean;
        positiveValue: boolean;
        negativeValue: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleChange: (event: any, value: any) => void;
    render(): JSX.Element;
}
import { PureComponent } from "react";
