export default DsBottomNavigationActionTheme;
declare namespace DsBottomNavigationActionTheme {
    namespace MuiBottomNavigationAction {
        namespace defaultProps {
            const showLabel: boolean;
        }
        namespace styleOverrides {
            const root: {
                marginLeft: string;
                marginRight: string;
                borderTopWidth: string;
                borderTopStyle: string;
                borderTopColor: string;
                padding: string;
                justifyContent: string;
                color: string;
                '> .MuiIcon-root': {
                    paddingTop: string;
                };
                '&.Mui-selected': {
                    borderTopColor: string;
                    color: string;
                };
            };
            const label: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                color: string;
                paddingBottom: string;
                '&.Mui-selected': {
                    fontSize: string;
                    color: string;
                };
            };
        }
    }
}
