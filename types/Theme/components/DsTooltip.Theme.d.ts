export default DsTooltipTheme;
declare namespace DsTooltipTheme {
    namespace MuiTooltip {
        namespace defaultProps {
            const arrow: boolean;
            const placement: string;
            const enterTouchDelay: number;
            const leaveTouchDelay: number;
        }
        namespace styleOverrides {
            export namespace tooltip {
                const boxShadow: string;
                const backgroundColor: string;
                const borderRadius: string;
                const borderWidth: string;
                const borderStyle: string;
                const borderColor: string;
                const color: string;
                const padding: string;
            }
            export namespace arrow_1 {
                const color_1: string;
                export { color_1 as color };
            }
            export { arrow_1 as arrow };
        }
    }
}
