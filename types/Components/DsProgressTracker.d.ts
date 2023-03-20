export class DsProgressTracker extends PureComponent<any, any, any> {
    static propsTypes: {
        activeStep: any;
        orientation: any;
        steps: any;
    };
    static defaultProps: {
        activeStep: number;
        orientation: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    renderStepIcon: (stepProps: any) => any;
    renderStep: ({ stepName }: {
        stepName: any;
    }, index: any) => JSX.Element;
    render(): JSX.Element;
}
export default DsProgressTracker;
import { PureComponent } from "react";
