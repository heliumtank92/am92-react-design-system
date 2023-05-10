export default class DsHelperText {
    static propTypes: {
        helperText: any;
        color: any;
        success: any;
        error: any;
    };
    static defaultProps: {
        helperText: string;
    };
    render(): JSX.Element;
}
