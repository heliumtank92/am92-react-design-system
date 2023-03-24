export default class DsTextFieldPassword {
    static propTypes: {
        visible: any;
    };
    static defaultProps: {
        visible: boolean;
    };
    constructor(props: any);
    state: {
        passwordVisible: any;
    };
    componentDidUpdate(nextProps?: {}, nextState?: {}): void;
    handleTogglePassword: () => void;
    render(): JSX.Element;
}
