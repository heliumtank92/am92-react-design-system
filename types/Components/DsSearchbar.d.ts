export class DsSearchbar extends Component<any, any, any> {
    static propTypes: {
        placeholder: any;
        options: any;
        onChange: any;
        startAdornmentProps: any;
    };
    static defaultProps: {
        placeholder: string;
        options: any[];
        startAdornmentProps: {};
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleChange: (event: any, newValue: any) => void;
    renderStartAdornment: () => JSX.Element;
    render(): JSX.Element;
}
export default DsSearchbar;
import { Component } from "react";
