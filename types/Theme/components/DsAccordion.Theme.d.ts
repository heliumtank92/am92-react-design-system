export default DsAccordionTheme;
declare namespace DsAccordionTheme {
    namespace MuiAccordion {
        namespace defaultProps {
            namespace TransitionProps {
                const unmountOnExit: boolean;
            }
        }
        namespace styleOverrides {
            const root: {
                backgroundColor: string;
                boxShadow: string;
                overflow: string;
                borderStyle: string;
                borderColor: string;
                borderWidth: string;
                '&:first-of-type': {
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                };
                '&:not(:first-of-type):not(.Mui-expanded)': {
                    marginTop: string;
                };
                '&:last-of-type': {
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
        }
    }
    namespace MuiAccordionSummary {
        export namespace styleOverrides_1 {
            const root_1: {
                padding: string;
                '&.Mui-expanded': {
                    borderBottomStyle: string;
                    borderBottomWidth: string;
                    borderBottomColor: string;
                    minHeight: string;
                };
            };
            export { root_1 as root };
            export const content: {
                margin: string;
                width: string;
                marginRight: string;
                '&.Mui-expanded': {
                    margin: string;
                    marginRight: string;
                };
            };
        }
        export { styleOverrides_1 as styleOverrides };
    }
    namespace MuiAccordionDetails {
        export namespace styleOverrides_2 {
            export namespace root_2 {
                const border: string;
                const paddingTop: string;
                const paddingBottom: string;
                const paddingLeft: string;
                const paddingRight: string;
            }
            export { root_2 as root };
        }
        export { styleOverrides_2 as styleOverrides };
    }
}
