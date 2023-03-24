export default class DsToggle {
    static propTypes: {
        name: any;
        value: any;
    };
    static defaultProps: {
        value: boolean;
    };
    handleChange: (event: any) => void;
    render(): JSX.Element;
}
