export default DsProgressIndicator;
declare class DsProgressIndicator {
    static propTypes: {
        step: any;
        maxStep: any;
    };
    static defaultProps: {
        step: number;
        maxStep: number;
    };
    render(): JSX.Element;
}
