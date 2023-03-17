export default class DsSearchbar extends PureComponent<any, any, any> {
    static propTypes: {
        placeholder: any;
        options: any;
        onChange: any;
        onMicClick: any;
    };
    static defaultProps: {
        placeholder: string;
        options: any[];
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleClearClick: () => void;
    handleChange: (event: any, newValue: any) => void;
    render(): JSX.Element;
}
import { PureComponent } from "react";
