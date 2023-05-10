export default class DsSideNav {
    static propTypes: {
        navLinks: any;
        open: any;
        onDrawerclose: any;
        onNavlinkClick: any;
    };
    static defaultProps: {
        navLinks: any[];
        open: boolean;
        onDrawerclose: () => any;
        onNavlinkClick: () => any;
    };
    renderNavLinks(): any;
    getDrawer(): JSX.Element;
    render(): JSX.Element;
}
