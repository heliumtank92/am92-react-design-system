export class DsProgressTracker {
    static propsTypes: {
        activeStep: any;
        orientation: any;
        steps: any;
    };
    static defaultProps: {
        activeStep: number;
        orientation: string;
    };
    renderStepIcon: (stepProps: any) => any;
    renderStep: ({ stepName }: {
        stepName: any;
    }, index: any) => JSX.Element;
    render(): JSX.Element;
}
export default DsProgressTracker;
