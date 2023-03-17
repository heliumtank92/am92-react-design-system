export default class DsToggle extends PureComponent<any, any, any> {
    static propTypes: {
        name: any;
        value: any;
    };
    static defaultProps: {
        value: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleChange: (event: any) => void;
    render(): JSX.Element;
}
import { PureComponent } from "react";
