export default DsDividerTheme;
declare namespace DsDividerTheme {
    namespace MuiDivider {
        const defaultProps: {
            'ds-size': string;
        };
        namespace styleOverrides {
            namespace root {
                const borderColor: string;
            }
            namespace light {
                const borderColor_1: string;
                export { borderColor_1 as borderColor };
            }
        }
        const variants: {
            props: {
                'ds-size': string;
            };
            style: {
                borderWidth: string;
            };
        }[];
    }
}
