export default DsAvatarTheme;
declare namespace DsAvatarTheme {
    namespace MuiAvatar {
        const defaultProps: {
            'ds-size': string;
        };
        const variants: ({
            props: {
                'ds-variant': string;
                'ds-size'?: undefined;
            };
            style: {
                borderWidth: string;
                borderStyle: string;
                borderColor: string;
                color: string;
                backgroundColor: string;
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                width?: undefined;
                height?: undefined;
                '> .MuiIcon-root'?: undefined;
            };
        } | {
            props: {
                'ds-variant': string;
                'ds-size'?: undefined;
            };
            style: {
                color: string;
                backgroundColor: string;
                borderWidth?: undefined;
                borderStyle?: undefined;
                borderColor?: undefined;
                fontWeight?: undefined;
                fontSize?: undefined;
                lineHeight?: undefined;
                letterSpacing?: undefined;
                width?: undefined;
                height?: undefined;
                '> .MuiIcon-root'?: undefined;
            };
        } | {
            props: {
                'ds-size': string;
                'ds-variant'?: undefined;
            };
            style: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                width: string;
                height: string;
                '> .MuiIcon-root': {
                    fontSize: string;
                };
                borderWidth?: undefined;
                borderStyle?: undefined;
                borderColor?: undefined;
                color?: undefined;
                backgroundColor?: undefined;
            };
        })[];
    }
}
