export default class DsHelperText extends PureComponent<any, any, any> {
    static propTypes: {
        helperText: any;
        color: any;
        success: any;
        error: any;
    };
    static defaultProps: {
        helperText: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { PureComponent } from "react";
