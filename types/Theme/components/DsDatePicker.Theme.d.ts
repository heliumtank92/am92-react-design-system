export default DsDatePickerTheme;
declare namespace DsDatePickerTheme {
    namespace MuiPickersDay {
        namespace styleOverrides {
            const root: {
                '&.Mui-selected': {
                    backgroundColor: string;
                    '&:hover': {
                        backgroundColor: string;
                        color: string;
                    };
                    '&:focus': {
                        backgroundColor: string;
                    };
                };
            };
        }
    }
    namespace MuiDialog {
        export namespace styleOverrides_1 {
            const root_1: {};
            export { root_1 as root };
            export const container: {};
            export const paper: {
                '& .MuiDialogContent-root': {
                    '&:has(.MuiCalendarOrClockPicker-root) + .MuiDialogActions-root': {
                        padding: string;
                    };
                };
            };
        }
        export { styleOverrides_1 as styleOverrides };
    }
}
