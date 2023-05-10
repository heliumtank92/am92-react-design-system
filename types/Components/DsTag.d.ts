export default DsTag;
declare class DsTag {
    static propTypes: {
        label: any;
        value: any;
        selected: any;
    };
    static defaultProps: {
        selected: boolean;
    };
    render(): JSX.Element;
}
