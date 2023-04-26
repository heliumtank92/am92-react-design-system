export default class DsOtp {
    static propTypes: {
        onComplete: any;
        name: any;
        length: any;
        initialOtp: any;
    };
    static defaultProps: {
        name: string;
        length: number;
    };
    constructor(props: any);
    optInputRefs: Map<any, any>;
    state: {
        otp: any[];
    };
    handleFocus: (event: any) => void;
    handleKeyDown: (event: any) => void;
    handleChange: (event: any) => void;
    handlePaste: (event: any) => void;
    resetOtpValues: () => void;
    renderOtpBoxes: () => JSX.Element[];
    render(): JSX.Element;
    #private;
}
