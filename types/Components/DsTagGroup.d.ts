export default DsTagGroup;
declare class DsTagGroup extends PureComponent<any, any, any> {
    static propTypes: {
        children: any;
        multi: any;
        name: any;
        value: any;
        onChange: any;
    };
    static defaultProps: {
        multi: boolean;
        onChange: (name: any, value: any) => void;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleUnselect: (handleValue: any) => void;
    handleSelect: (handleValue: any) => void;
    render(): JSX.Element;
}
import { PureComponent } from "react";
