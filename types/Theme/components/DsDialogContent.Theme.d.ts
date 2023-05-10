export default DsDialogContentTheme;
declare namespace DsDialogContentTheme {
    namespace MuiDialogContent {
        const variants: {
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
        namespace styleOverrides {
            namespace root {
                const color: string;
                const paddingLeft: string;
                const paddingRight: string;
                const paddingBottom: string;
            }
        }
    }
}
