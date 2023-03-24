export default DsTagGroup;
declare class DsTagGroup {
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
    handleUnselect: (handleValue: any) => void;
    handleSelect: (handleValue: any) => void;
    render(): JSX.Element;
}
