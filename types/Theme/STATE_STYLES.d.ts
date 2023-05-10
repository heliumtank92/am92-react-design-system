export default STATE_STYLES;
declare namespace STATE_STYLES {
    const ACTION_PRIMARY_STATE_PRIMARY: {
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
                        mixBlendMode: string;
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
                        mixBlendMode: string;
                        backgroundColor: string;
                    };
                };
            };
        };
    };
    const ACTION_SECONDARY_STATE_SECONDARY: {
        '&:hover:not(.Mui-disabled)': {
            backgroundColor: string;
        };
    };
    const SURFACE_PRIMARY_STATE_PRIMARY: {
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
    };
    const SURFACE_SECONDARY_STATE_PRIMARY: {
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
    };
}
