export default DsChipDsTagTheme;
declare namespace DsChipDsTagTheme {
    namespace MuiChip {
        const variants: ({
            props: {
                'ds-variant': string;
                type?: undefined;
                color?: undefined;
            };
            style: {
                border: string;
                borderRadius: string;
                paddingLeft: string;
                paddingRight: string;
                height: string;
                '.MuiChip-icon': {
                    fontSize: string;
                    marginRight: string;
                    marginLeft: string;
                    color: string;
                };
                '> .MuiChip-label': {
                    paddingLeft: string;
                    paddingRight: string;
                };
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                textTransform?: undefined;
                paddingTop?: undefined;
                paddingBottom?: undefined;
                backgroundColor?: undefined;
                color?: undefined;
            };
        } | {
            props: {
                'ds-variant': string;
                type: string;
                color?: undefined;
            };
            style: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                paddingTop: string;
                paddingBottom: string;
                backgroundColor: string;
                color: string;
                border?: undefined;
                borderRadius?: undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
                height?: undefined;
                '.MuiChip-icon'?: undefined;
                '> .MuiChip-label'?: undefined;
            };
        } | {
            props: {
                'ds-variant': string;
                type: string;
                color: string;
            };
            style: {
                backgroundColor: string;
                border?: undefined;
                borderRadius?: undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
                height?: undefined;
                '.MuiChip-icon'?: undefined;
                '> .MuiChip-label'?: undefined;
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                textTransform?: undefined;
                paddingTop?: undefined;
                paddingBottom?: undefined;
                color?: undefined;
            };
        } | {
            props: {
                'ds-variant': string;
                type: string;
                color: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                border?: undefined;
                borderRadius?: undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
                height?: undefined;
                '.MuiChip-icon'?: undefined;
                '> .MuiChip-label'?: undefined;
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                textTransform?: undefined;
                paddingTop?: undefined;
                paddingBottom?: undefined;
            };
        })[];
        namespace styleOverrides {
            namespace root {
                const paddingTop: string;
                const paddingBottom: string;
                const fontWeight: string;
                const fontSize: string;
                const lineHeight: string;
                const letterSpacing: string;
            }
            const filled: {
                backgroundColor: string;
                border: string;
                '> .MuiIcon-root': {
                    color: string;
                };
            };
            const filledSecondary: {
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                backgroundColor: string;
                border: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                '> .MuiIcon-root': {
                    color: string;
                };
            };
            namespace label {
                const paddingTop_1: string;
                export { paddingTop_1 as paddingTop };
                const paddingBottom_1: string;
                export { paddingBottom_1 as paddingBottom };
                export const paddingLeft: string;
                export const paddingRight: string;
            }
            namespace icon {
                const fontSize_1: string;
                export { fontSize_1 as fontSize };
                export const marginLeft: string;
                export const marginRight: string;
            }
            namespace deleteIcon {
                const fontSize_2: string;
                export { fontSize_2 as fontSize };
                const marginRight_1: string;
                export { marginRight_1 as marginRight };
                const marginLeft_1: string;
                export { marginLeft_1 as marginLeft };
            }
        }
    }
}
