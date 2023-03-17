export default DsDatePickerTheme;
declare namespace DsDatePickerTheme {
    namespace MuiCalendarPicker {
        namespace styleOverrides {
            const root: {};
        }
    }
    namespace MuiPickersDay {
        export namespace styleOverrides_1 {
            const root_1: {
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
            export { root_1 as root };
        }
        export { styleOverrides_1 as styleOverrides };
    }
    namespace MuiDialog {
        export namespace styleOverrides_2 {
            const root_2: {};
            export { root_2 as root };
            export const container: {};
            export const paper: {
                '& .MuiDialogContent-root': {
                    '&:has(.MuiCalendarOrClockPicker-root) + .MuiDialogActions-root': {
                        padding: string;
                    };
                };
            };
        }
        export { styleOverrides_2 as styleOverrides };
    }
}
