export default DsAppBarTheme;
declare namespace DsAppBarTheme {
    namespace MuiListItemButton {
        const variants: {
            props: {
                'ds-variant': string;
            };
            style: {
                paddingLeft: string;
            };
        }[];
    }
    namespace MuiListItemIcon {
        const variants_1: {
            props: {
                'ds-variant': string;
            };
            style: {
                width: string;
            };
        }[];
        export { variants_1 as variants };
    }
    namespace MuiAppBar {
        const variants_2: {
            props: {
                'ds-variant': string;
            };
            style: ({ ownerState, theme }: {
                ownerState: any;
                theme: any;
            }) => {
                marginLeft: string;
                width: string;
                transition: any;
            };
        }[];
        export { variants_2 as variants };
        export namespace defaultProps {
            const color: string;
            const enableColorOnDark: boolean;
            const elevation: number;
        }
    }
    namespace MuiToolbar {
        namespace styleOverrides {
            const root: {
                padding: string;
                minHeight: string;
                '@media (min-width: 0px)': {
                    padding: string;
                    minHeight: string;
                };
            };
        }
    }
    namespace MuiDrawer {
        const variants_3: {
            props: {
                'ds-variant': string;
            };
            style: ({ ownerState, theme }: {
                ownerState: any;
                theme: any;
            }) => {
                transition: any;
                overflowX: string;
                width: number;
                '& .MuiDrawer-paper': {
                    [x: number]: {
                        width: string;
                    };
                    transition: any;
                    overflowX: string;
                    width: number;
                };
                zIndex: number;
                flexShrink: number;
                whiteSpace: string;
                boxSizing: string;
            };
        }[];
        export { variants_3 as variants };
        export namespace styleOverrides_1 {
            namespace paper {
                const backgroundColor: string;
                const boxShadow: string;
            }
            namespace paperAnchorBottom {
                const backgroundColor_1: string;
                export { backgroundColor_1 as backgroundColor };
            }
            namespace paperAnchorRight {
                export const paddingTop: string;
                export const borderTopLeftRadius: string;
                export const width: string;
                const backgroundColor_2: string;
                export { backgroundColor_2 as backgroundColor };
                export const backgroundImage: string;
            }
        }
        export { styleOverrides_1 as styleOverrides };
    }
}
