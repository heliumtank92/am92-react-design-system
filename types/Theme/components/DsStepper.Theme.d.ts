export default DsStepperTheme;
declare namespace DsStepperTheme {
    namespace MuiStepper {
        namespace styleOverrides {
            const vertical: {
                '> .MuiStep-root': {
                    '&:first-of-type': {
                        paddingTop: string;
                    };
                    '&:last-of-type': {
                        paddingBottom: string;
                    };
                };
            };
        }
    }
}
