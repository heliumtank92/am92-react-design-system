export default class DsSearchbar {
    static propTypes: {
        placeholder: any;
        options: any;
        onChange: any;
        onMicClick: any;
    };
    static defaultProps: {
        placeholder: string;
        options: any[];
    };
    handleClearClick: () => void;
    handleChange: (event: any, newValue: any) => void;
    render(): JSX.Element;
}
