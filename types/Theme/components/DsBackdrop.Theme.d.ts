export default DsBackdropTheme;
declare namespace DsBackdropTheme {
    namespace MuiBackdrop {
        const variants: {
            props: {
                loader: string;
            };
            style: ({ ownerState, theme }: {
                ownerState: any;
                theme: any;
            }) => {
                backgroundColor: string;
                zIndex: any;
            };
        }[];
    }
}
