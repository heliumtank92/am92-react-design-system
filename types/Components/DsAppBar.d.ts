export default class DsAppBar {
    static propTypes: {
        open: any;
        leftIcon: any;
        content: any;
        rightActions: any;
    };
    static defaultProps: {
        open: boolean;
        content: string;
    };
    render(): JSX.Element;
}
