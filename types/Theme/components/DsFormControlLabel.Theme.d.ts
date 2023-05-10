export default DsFormControlLabelTheme;
declare namespace DsFormControlLabelTheme {
    namespace MuiFormControlLabel {
        namespace styleOverrides {
            const root: {
                '&.Mui-disabled': {
                    '&:hover': {
                        pointerEvents: string;
                        cursor: string;
                    };
                };
            };
            namespace label {
                const padding: string;
                const paddingRight: string;
                const marginLeft: string;
                const fontWeight: string;
                const fontSize: string;
                const lineHeight: string;
                const letterSpacing: string;
            }
            namespace labelPlacementStart {
                const marginLeft_1: string;
                export { marginLeft_1 as marginLeft };
                export const marginRight: string;
            }
        }
    }
}
