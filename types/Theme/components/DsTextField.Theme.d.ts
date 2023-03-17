export default DsTextFieldTheme;
declare namespace DsTextFieldTheme {
    namespace MuiInputLabel {
        namespace defaultProps {
            const shrink: boolean;
        }
        namespace styleOverrides {
            const root: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                transform: string;
                position: string;
                marginBottom: string;
                color: string;
                '> p:first-of-type': {
                    paddingTop: string;
                    paddingBottom: string;
                    paddingRight: string;
                };
                '&.Mui-focused:not(.Mui-disabled)': {
                    color: string;
                };
                '&.MuiFormLabel-colorSuccess': {
                    color: string;
                };
                '&.Mui-focused.MuiFormLabel-colorSuccess': {
                    color: string;
                };
                '&.Mui-error': {
                    color: string;
                };
                '&.Mui-focused.Mui-error': {
                    color: string;
                };
            };
        }
    }
    namespace MuiInputBase {
        export namespace defaultProps_1 {
            const size: string;
        }
        export { defaultProps_1 as defaultProps };
        export const variants: ({
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
        export namespace styleOverrides_1 {
            const root_1: {
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
            export { root_1 as root };
            export const input: {
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
            export namespace adornedStart {
                const paddingLeft: string;
            }
            export namespace adornedEnd {
                const paddingRight: string;
            }
        }
        export { styleOverrides_1 as styleOverrides };
    }
    namespace MuiInputAdornment {
        export namespace styleOverrides_2 {
            const root_2: {
                color: string;
                '& .MuiSvgIcon-root': {
                    cursor: string;
                };
            };
            export { root_2 as root };
            export namespace positionStart {
                const marginRight: string;
            }
            export namespace positionEnd {
                const marginLeft: string;
            }
        }
        export { styleOverrides_2 as styleOverrides };
    }
}
