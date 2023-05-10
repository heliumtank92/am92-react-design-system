export default DsSwitch;
declare class DsSwitch {
    static propTypes: {
        name: any;
        value: any;
        positiveValue: any;
        negativeValue: any;
        onChange: any;
    };
    static defaultProps: {
        value: boolean;
        positiveValue: boolean;
        negativeValue: boolean;
    };
    handleChange: (event: any, value: any) => void;
    render(): JSX.Element;
}
