export default DsRadio;
declare class DsRadio {
    static propTypes: {
        label: any;
        labelPlacement: any;
    };
    static defaultProps: {
        labelPlacement: string;
    };
    render(): JSX.Element;
}
