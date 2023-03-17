export default class DsAppBar extends PureComponent<any, any, any> {
    static propTypes: {
        open: any;
        leftIcon: any;
        content: any;
        rightActions: any;
    };
    static defaultProps: {
        open: boolean;
        content: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { PureComponent } from "react";
