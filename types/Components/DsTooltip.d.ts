export default DsTooltip;
declare class DsTooltip {
    static propTypes: {
        heading: any;
        description: any;
        buttonGroup: any;
    };
    static defaultProps: {};
    renderTitle: () => any;
    render(): JSX.Element;
}
