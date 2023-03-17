export default class DsSideNav extends PureComponent<any, any, any> {
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
    constructor(props: any);
    constructor(props: any, context: any);
    renderNavLinks(): any;
    getDrawer(): JSX.Element;
    render(): JSX.Element;
}
import { PureComponent } from "react";
