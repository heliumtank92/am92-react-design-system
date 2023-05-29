export default class DsTextFieldPassword extends Component<any, any, any> {
    static propTypes: {
        visible: any;
    };
    static defaultProps: {
        visible: boolean;
    };
    constructor(props: any);
    state: {
        passwordVisible: any;
    };
    componentDidUpdate(nextProps?: {}, nextState?: {}): void;
    handleTogglePassword: () => void;
    render(): JSX.Element;
}
import { Component } from "react";
