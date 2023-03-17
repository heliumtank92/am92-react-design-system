export default DsProgressTrackerTheme;
declare namespace DsProgressTrackerTheme {
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
    namespace MuiStepLabel {
        export namespace styleOverrides_1 {
            namespace root {
                const paddingLeft: string;
                const paddingRight: string;
                const paddingTop: string;
                const paddingBottom: string;
            }
            const label: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                color: string;
                marginLeft: string;
                marginRight: string;
                '&.Mui-disabled': {
                    color: string;
                };
            };
            const iconContainer: {
                fontSize: string;
                padding: string;
                margin: string;
                marginTop: string;
                marginBottom: string;
                '&.Mui-disabled': {
                    marginTop: string;
                    marginBottom: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    textTransform: string;
                    color: string;
                    height: string;
                    width: string;
                    marginLeft: string;
                    padding: string;
                    borderWidth: string;
                    borderStyle: string;
                    borderColor: string;
                    borderRadius: string;
                    display: string;
                    justifyContent: string;
                    alignItems: string;
                };
            };
        }
        export { styleOverrides_1 as styleOverrides };
    }
    namespace MuiStepConnector {
        export namespace styleOverrides_2 {
            export namespace line {
                const borderLeftWidth: string;
                const borderLeftStyle: string;
                const borderLeftColor: string;
                const minHeight: string;
            }
            export namespace vertical_1 {
                const marginLeft: string;
            }
            export { vertical_1 as vertical };
        }
        export { styleOverrides_2 as styleOverrides };
    }
}
