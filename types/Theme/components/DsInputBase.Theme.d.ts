export default DsInputBaseTheme;
declare namespace DsInputBaseTheme {
    namespace MuiInputBase {
        namespace defaultProps {
            const size: string;
        }
        const variants: ({
            props: {
                'ds-variant': string;
                size?: undefined;
            };
            style: {
                textAlign: string;
                height?: undefined;
                width?: undefined;
                '> input'?: undefined;
                borderRadius?: undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
                paddingTop?: undefined;
                paddingBottom?: undefined;
                minWidth?: undefined;
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                '> input::placeholder'?: undefined;
            };
        } | {
            props: {
                'ds-variant': string;
                size: string;
            };
            style: {
                height: string;
                width: string;
                '> input': {
                    padding: string;
                };
                textAlign?: undefined;
                borderRadius?: undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
                paddingTop?: undefined;
                paddingBottom?: undefined;
                minWidth?: undefined;
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                '> input::placeholder'?: undefined;
            };
        } | {
            props: {
                'ds-variant': string;
                size?: undefined;
            };
            style: {
                borderRadius: string;
                paddingLeft: string;
                paddingRight: string;
                paddingTop: string;
                paddingBottom: string;
                height: string;
                minWidth: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                '> input': {
                    padding: string;
                };
                '> input::placeholder': {
                    color: string;
                    opacity: number;
                };
                textAlign?: undefined;
                width?: undefined;
            };
        })[];
        namespace styleOverrides {
            const root: {
                background: string;
                borderWidth: string;
                borderStyle: string;
                borderColor: string;
                borderRadius: string;
                '&.Mui-focused:not(.Mui-disabled)': {
                    borderColor: string;
                };
                '&.MuiInputBase-colorSuccess': {
                    borderColor: string;
                };
                '&.Mui-focused.MuiInputBase-colorSuccess': {
                    borderColor: string;
                };
                '&.Mui-disabled': {
                    background: string;
                    borderColor: string;
                    cursor: string;
                    pointerEvents: string;
                    '> .MuiInputAdornment-root': {
                        color: string;
                        cursor: string;
                        pointerEvents: string;
                    };
                };
                '&.Mui-error': {
                    borderColor: string;
                };
                '&.Mui-focused.Mui-error': {
                    borderColor: string;
                };
                '&.MuiInputBase-readOnly': {
                    background: string;
                    borderColor: string;
                    pointerEvents: string;
                    '> .MuiInputAdornment-root': {
                        color: string;
                    };
                };
                '> .MuiInputAdornment-root': {
                    padding: string;
                    height: string;
                };
            };
            const input: {
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                '&.Mui-disabled': {
                    cursor: string;
                    pointerEvents: string;
                };
                '&::placeholder': {
                    color: string;
                    opacity: number;
                };
            };
            namespace adornedStart {
                const paddingLeft: string;
            }
            namespace adornedEnd {
                const paddingRight: string;
            }
        }
    }
}
