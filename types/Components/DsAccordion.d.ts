export default DsAccordion;
declare class DsAccordion {
    static propTypes: {
        header: any;
        summary: any;
        expandIcon: any;
    };
    static defaultProps: {
        expandIcon: JSX.Element;
    };
    render(): JSX.Element;
}
