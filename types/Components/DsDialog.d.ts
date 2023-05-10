export default class DsDialog {
    static propTypes: {
        imageSrc: any;
        imageAlt: any;
        heading: any;
        description: any;
        buttonGroup: any;
        textAlign: any;
        showClose: any;
        fullWidth: any;
    };
    static defaultProps: {
        imageSrc: string;
        imageAlt: string;
        textAlign: string;
        showClose: boolean;
        fullWidth: boolean;
    };
    render(): JSX.Element;
}
