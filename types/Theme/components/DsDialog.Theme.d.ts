export default DsDialogTheme;
declare namespace DsDialogTheme {
    namespace MuiDialog {
        namespace defaultProps {
            const scroll: string;
            const maxWidth: string;
        }
        namespace styleOverrides {
            namespace paper {
                const backgroundColor: string;
                const borderRadius: string;
                const boxShadow: string;
            }
            namespace paperWidthXs {
                const maxWidth_1: string;
                export { maxWidth_1 as maxWidth };
            }
        }
    }
    namespace MuiDialogTitle {
        export namespace styleOverrides_1 {
            namespace root {
                const fontWeight: string;
                const fontSize: string;
                const lineHeight: string;
                const letterSpacing: string;
                const color: string;
                const paddingLeft: string;
                const paddingRight: string;
                const paddingBottom: string;
                const paddingTop: string;
                const textAlign: string;
            }
        }
        export { styleOverrides_1 as styleOverrides };
    }
    namespace MuiDialogContent {
        export const variants: {
            props: {
                textOnly: boolean;
            };
            style: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                paddingBottom: string;
                textAlign: string;
            };
        }[];
        export namespace styleOverrides_2 {
            export namespace root_1 {
                const color_1: string;
                export { color_1 as color };
                const paddingLeft_1: string;
                export { paddingLeft_1 as paddingLeft };
                const paddingRight_1: string;
                export { paddingRight_1 as paddingRight };
                const paddingBottom_1: string;
                export { paddingBottom_1 as paddingBottom };
            }
            export { root_1 as root };
        }
        export { styleOverrides_2 as styleOverrides };
    }
    namespace MuiDialogActions {
        export namespace styleOverrides_3 {
            const root_2: {
                padding: string;
                '> *': {
                    flex: number;
                };
            };
            export { root_2 as root };
        }
        export { styleOverrides_3 as styleOverrides };
    }
}
