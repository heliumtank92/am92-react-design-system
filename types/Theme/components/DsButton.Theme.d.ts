export default DsButtonTheme;
declare namespace DsButtonTheme {
    namespace MuiButton {
        namespace defaultProps {
            const variant: string;
            const size: string;
            const color: string;
            const disableElevation: boolean;
        }
        namespace styleOverrides {
            const root: {
                borderRadius: number;
                textTransform: string;
                '&.Mui-disabled': {
                    cursor: string;
                    pointerEvents: string;
                };
            };
            const containedSecondary: {
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
                backgroundColor: string;
                borderWidth: string;
                borderStyle: string;
                borderColor: string;
                color: string;
                '&:disabled': {
                    backgroundColor: string;
                    color: string;
                };
            };
            const text: {
                '&:hover': {
                    backgroundColor: string;
                };
                '> .MuiTouchRipple-root': {
                    display: string;
                };
            };
            namespace sizeLarge {
                const padding: string;
                const height: string;
                const fontWeight: string;
                const fontSize: string;
                const lineHeight: string;
                const letterSpacing: string;
            }
            namespace sizeMedium {
                const padding_1: string;
                export { padding_1 as padding };
                const height_1: string;
                export { height_1 as height };
                const fontWeight_1: string;
                export { fontWeight_1 as fontWeight };
                const fontSize_1: string;
                export { fontSize_1 as fontSize };
                const lineHeight_1: string;
                export { lineHeight_1 as lineHeight };
                const letterSpacing_1: string;
                export { letterSpacing_1 as letterSpacing };
            }
            namespace sizeSmall {
                const padding_2: string;
                export { padding_2 as padding };
                const height_2: string;
                export { height_2 as height };
                const fontWeight_2: string;
                export { fontWeight_2 as fontWeight };
                const fontSize_2: string;
                export { fontSize_2 as fontSize };
                const lineHeight_2: string;
                export { lineHeight_2 as lineHeight };
                const letterSpacing_2: string;
                export { letterSpacing_2 as letterSpacing };
            }
            const iconSizeLarge: {
                fontSize: string;
                '&.MuiButton-startIcon': {
                    marginRight: string;
                };
                '&.MuiButton-endIcon': {
                    marginLeft: string;
                };
            };
            const iconSizeMedium: {
                fontSize: string;
                '&.MuiButton-startIcon': {
                    marginRight: string;
                };
                '&.MuiButton-endIcon': {
                    marginLeft: string;
                };
            };
            const iconSizeSmall: {
                fontSize: string;
                '&.MuiButton-startIcon': {
                    marginRight: string;
                };
                '&.MuiButton-endIcon': {
                    marginLeft: string;
                };
            };
            const textSizeSmall: {
                height: string;
                color: string;
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                borderRadius: number;
                '&.MuiIcon-root': {
                    fontSize: string;
                    '&.MuiButton-startIcon': {
                        marginRight: string;
                    };
                    '&.MuiButton-endIcon': {
                        marginLeft: string;
                    };
                };
                '&:disabled': {
                    color: string;
                };
            };
            const textSizeMedium: {
                height: string;
                color: string;
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                borderRadius: number;
                '&.MuiIcon-root': {
                    fontSize: string;
                    '&.MuiButton-startIcon': {
                        marginRight: string;
                    };
                    '&.MuiButton-endIcon': {
                        marginLeft: string;
                    };
                };
                '&:disabled': {
                    color: string;
                };
            };
            const textSizeLarge: {
                height: string;
                color: string;
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                borderRadius: number;
                '&.MuiIcon-root': {
                    fontSize: string;
                    '&.MuiButton-startIcon': {
                        marginRight: string;
                    };
                    '&.MuiButton-endIcon': {
                        marginLeft: string;
                    };
                };
                '&:disabled': {
                    color: string;
                };
            };
        }
        const variants: ({
            props: {
                variant: string;
                color?: undefined;
            };
            style: {
                borderRadius: number;
                color: string;
                backgroundColor: string;
            };
        } | {
            props: {
                color: string;
                variant?: undefined;
            };
            style: {
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
                color: string;
                '&:disabled': {
                    color: string;
                    backgroundColor: string;
                };
                borderRadius?: undefined;
                backgroundColor?: undefined;
            };
        })[];
    }
}
