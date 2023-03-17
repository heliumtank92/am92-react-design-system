export default DsToastTheme;
declare namespace DsToastTheme {
    namespace MuiAlert {
        namespace defaultProps {
            const variant: string;
            const icon: boolean;
            const severity: string;
        }
        namespace styleOverrides {
            export namespace root {
                const padding: string;
                const borderRadius: string;
                const borderWidth: string;
                const borderStyle: string;
                const boxShadow: string;
                const borderColor: string;
                const backgroundColor: string;
                const color: string;
                const alignItems: string;
                const fontWeight: string;
                const fontSize: string;
                const lineHeight: string;
                const letterSpacing: string;
            }
            export namespace icon_1 {
                const padding_1: string;
                export { padding_1 as padding };
            }
            export { icon_1 as icon };
            export namespace message {
                export const flexGrow: number;
                const padding_2: string;
                export { padding_2 as padding };
            }
            export const action: {
                marginRight: string;
                padding: string;
                marginLeft: string;
                fontSize: string;
                '.MuiIconButton-root': {
                    fontSize: string;
                };
                '.MuiSvgIcon-root': {
                    fontSize: string;
                };
            };
            export namespace filledSuccess {
                const color_1: string;
                export { color_1 as color };
                const borderColor_1: string;
                export { borderColor_1 as borderColor };
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            export namespace filledInfo {
                const color_2: string;
                export { color_2 as color };
                const borderColor_2: string;
                export { borderColor_2 as borderColor };
                const backgroundColor_2: string;
                export { backgroundColor_2 as backgroundColor };
            }
            export namespace filledWarning {
                const color_3: string;
                export { color_3 as color };
                const borderColor_3: string;
                export { borderColor_3 as borderColor };
                const backgroundColor_3: string;
                export { backgroundColor_3 as backgroundColor };
            }
            export namespace filledError {
                const color_4: string;
                export { color_4 as color };
                const borderColor_4: string;
                export { borderColor_4 as borderColor };
                const backgroundColor_4: string;
                export { backgroundColor_4 as backgroundColor };
            }
            export namespace outlinedSuccess {
                const color_5: string;
                export { color_5 as color };
                const backgroundColor_5: string;
                export { backgroundColor_5 as backgroundColor };
            }
            export namespace outlinedInfo {
                const color_6: string;
                export { color_6 as color };
                const backgroundColor_6: string;
                export { backgroundColor_6 as backgroundColor };
            }
            export namespace outlinedWarning {
                const color_7: string;
                export { color_7 as color };
                const backgroundColor_7: string;
                export { backgroundColor_7 as backgroundColor };
            }
            export namespace outlinedError {
                const color_8: string;
                export { color_8 as color };
                const backgroundColor_8: string;
                export { backgroundColor_8 as backgroundColor };
            }
        }
    }
}
