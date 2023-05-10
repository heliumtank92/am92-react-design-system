export default DsRadioTheme;
declare namespace DsRadioTheme {
    namespace MuiRadio {
        namespace styleOverrides {
            const root: {
                padding: string;
                '&:hover': {
                    backgroundColor: string;
                    '.MuiTouchRipple-root': {
                        width: string;
                        height: string;
                        top: string;
                        left: string;
                        backgroundColor: string;
                    };
                };
                '&.Mui-focusVisible': {
                    '.MuiTouchRipple-root': {
                        width: string;
                        height: string;
                        top: string;
                        left: string;
                        backgroundColor: string;
                        '> .MuiTouchRipple-ripple': {
                            width: string;
                            height: string;
                            top: string;
                            left: string;
                            backgroundColor: string;
                            '> .MuiTouchRipple-childPulsate': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                '&.Mui-checked:not(.Mui-disabled)': {
                    '&:hover': {
                        backgroundColor: string;
                        '.MuiTouchRipple-root': {
                            width: string;
                            height: string;
                            top: string;
                            left: string;
                            backgroundColor: string;
                        };
                    };
                    '&.Mui-focusVisible': {
                        '.MuiTouchRipple-root': {
                            backgroundColor: string;
                            '> .MuiTouchRipple-ripple': {
                                backgroundColor: string;
                                '> .MuiTouchRipple-childPulsate': {
                                    backgroundColor: string;
                                };
                            };
                        };
                    };
                };
                '&.Mui-disabled': {
                    color: string;
                };
            };
        }
    }
}
