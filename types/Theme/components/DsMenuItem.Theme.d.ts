export default DsMenuItemTheme;
declare namespace DsMenuItemTheme {
    namespace MuiMenuItem {
        namespace styleOverrides {
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
    }
}
