export class DsSearchbar {
    static propTypes: {
        placeholder: any;
        options: any;
        onChange: any;
        startAdornmentProps: any;
    };
    static defaultProps: {
        placeholder: string;
        options: any[];
        startAdornmentProps: {};
    };
    handleChange: (event: any, newValue: any) => void;
    renderStartAdornment: () => JSX.Element;
    render(): JSX.Element;
}
export default DsSearchbar;
