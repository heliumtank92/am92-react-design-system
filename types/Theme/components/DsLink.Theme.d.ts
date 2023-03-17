export default DsLinkTheme;
declare namespace DsLinkTheme {
    namespace MuiLink {
        namespace defaultProps {
            const color: string;
            const variant: string;
            const underline: string;
        }
        namespace styleOverrides {
            const root: {
                cursor: string;
                textDecorationColor: string;
                textUnderlinePosition: string;
                '&:visited': {
                    color: string;
                    textDecorationColor: string;
                };
                '&:active': {
                    color: string;
                    textDecorationColor: string;
                };
                '&:disabled': {
                    color: string;
                    textDecorationColor: string;
                };
                '&:focus': {
                    textDecoration: string;
                };
            };
        }
    }
}
