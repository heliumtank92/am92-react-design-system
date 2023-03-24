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
                padding: string;
                '> .MuiIcon-root': {
                    paddingTop: string;
                };
            };
            namespace label {
                const fontWeight: string;
                const fontSize: string;
                const lineHeight: string;
                const letterSpacing: string;
            }
            namespace selected {
                const borderTopColor: string;
            }
        }
    }
}
