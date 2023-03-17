export default DsMenuTheme;
declare namespace DsMenuTheme {
    namespace MuiMenu {
        namespace defaultProps {
            const disableAutoFocusItem: boolean;
        }
        namespace styleOverrides {
            namespace list {
                const boxShadow: string;
                const borderRadius: string;
            }
        }
    }
    namespace MuiMenuItem {
        export namespace styleOverrides_1 {
            const root: {
                '> * ': {
                    zIndex: number;
                };
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                '&:focus-visible:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                '&:active:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                paddingTop: string;
                paddingBottom: string;
                paddingLeft: string;
                paddingRight: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                '&.Mui-selected': {
                    backgroundColor: string;
                };
                '&.Mui-selected:hover': {
                    backgroundColor: string;
                };
            };
        }
        export { styleOverrides_1 as styleOverrides };
    }
}
