export default DsFabTheme;
declare namespace DsFabTheme {
    namespace MuiFab {
        namespace defaultProps {
            const size: string;
            const color: string;
        }
        namespace styleOverrides {
            const root: {
                boxShadow: string;
                textTransform: string;
                height: string;
                width: string;
                borderRadius: string;
                '&.MuiFab-default': {
                    backgroundColor: string;
                };
                '&.MuiFab-extended .MuiTypography-root': {
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginLeft: string;
                };
            };
        }
        const variants: ({
            props: {
                size: string;
                color?: undefined;
            };
            style: {
                padding: string;
                '&.MuiFab-extended': {
                    paddingRight: string;
                };
                fontSize?: undefined;
                '> .MuiIcon-root'?: undefined;
            };
        } | {
            props: {
                size: string;
                color?: undefined;
            };
            style: {
                padding: string;
                fontSize: string;
                '&.MuiFab-extended': {
                    paddingRight: string;
                };
                '> .MuiIcon-root': {
                    fontSize: string;
                };
            };
        } | {
            props: {
                color: string;
                size?: undefined;
            };
            style: {
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                padding?: undefined;
                '&.MuiFab-extended'?: undefined;
                fontSize?: undefined;
                '> .MuiIcon-root'?: undefined;
            };
        })[];
    }
}
