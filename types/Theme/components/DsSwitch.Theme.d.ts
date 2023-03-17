export default DsSwitchTheme;
declare namespace DsSwitchTheme {
    namespace MuiToggleButtonGroup {
        namespace styleOverrides {
            const root: {
                border: string;
                borderRadius: string;
                padding: string;
                backgroundColor: string;
                '> .MuiToggleButtonGroup-grouped': {
                    border: string;
                    width: string;
                    height: string;
                    '&:not(:first-of-type)': {
                        borderRadius: string;
                        marginLeft: string;
                        border: string;
                    };
                    '&:first-of-type': {
                        borderRadius: string;
                    };
                    '&:hover': {
                        backgroundColor: string;
                    };
                    '&:not(.Mui-disabled)': {
                        color: string;
                        '&.Mui-selected': {
                            backgroundColor: string;
                            color: string;
                            '&:hover': {
                                backgroundColor: string;
                            };
                        };
                    };
                    '&.Mui-disabled': {
                        color: string;
                        border: string;
                        cursor: string;
                        pointerEvents: string;
                        '&.Mui-selected': {
                            backgroundColor: string;
                            '&:hover': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
            };
        }
    }
}
