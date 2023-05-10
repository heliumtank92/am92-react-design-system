export default DsToggleTheme;
declare namespace DsToggleTheme {
    namespace MuiSwitch {
        namespace styleOverrides {
            const root: {
                height: string;
                width: string;
                padding: string;
                borderRadius: string;
                '.Mui-disabled': {
                    pointerEvents: string;
                    cursor: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
            };
            const switchBase: {
                padding: string;
                height: string;
                width: string;
                borderRadius: string;
                '&.Mui-checked + .MuiSwitch-track': {
                    opacity: number;
                };
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: number;
                    backgroundColor: string;
                };
                '.MuiTouchRipple-root': {
                    height: string;
                    width: string;
                    top: string;
                    left: string;
                };
            };
            namespace thumb {
                const height: string;
                const width: string;
                const color: string;
            }
            namespace track {
                const opacity: number;
                const backgroundColor: string;
            }
        }
    }
}
