export default DsInputLabelTheme;
declare namespace DsInputLabelTheme {
    namespace MuiInputLabel {
        namespace defaultProps {
            const shrink: boolean;
        }
        namespace styleOverrides {
            const root: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                transform: string;
                position: string;
                marginBottom: string;
                color: string;
                '> p:first-of-type': {
                    paddingTop: string;
                    paddingBottom: string;
                    paddingRight: string;
                };
                '&.Mui-focused:not(.Mui-disabled)': {
                    color: string;
                };
                '&.MuiFormLabel-colorSuccess': {
                    color: string;
                };
                '&.Mui-focused.MuiFormLabel-colorSuccess': {
                    color: string;
                };
                '&.Mui-error': {
                    color: string;
                };
                '&.Mui-focused.Mui-error': {
                    color: string;
                };
            };
        }
    }
}
