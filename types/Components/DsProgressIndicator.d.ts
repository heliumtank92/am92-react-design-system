export default DsProgressIndicator;
declare class DsProgressIndicator extends Component<any, any, any> {
    static propTypes: {
        step: any;
        maxStep: any;
    };
    static defaultProps: {
        step: number;
        maxStep: number;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { Component } from "react";
