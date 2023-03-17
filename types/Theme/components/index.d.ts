export default components;
declare const components: {
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: string;
                boxShadow: string;
                border: string;
                backgroundColor: string;
            };
        };
    };
    MuiTypography: {
        defaultProps: {
            variant: string;
        };
    };
    MuiTooltip: {
        defaultProps: {
            arrow: boolean;
            placement: string;
            enterTouchDelay: number;
            leaveTouchDelay: number;
        };
        styleOverrides: {
            tooltip: {
                boxShadow: string;
                backgroundColor: string;
                borderRadius: string;
                borderWidth: string;
                borderStyle: string;
                borderColor: string;
                color: string;
                padding: string;
            };
            arrow: {
                color: string;
            };
        };
    };
    MuiSwitch: {
        styleOverrides: {
            root: {
                height: string;
                width: string;
                padding: string;
                borderRadius: string;
                '.Mui-disabled': {
                    pointerEvents: string;
                    cursor: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
            };
            switchBase: {
                padding: string;
                height: string;
                width: string;
                borderRadius: string;
                '&.Mui-checked + .MuiSwitch-track': {
                    opacity: number;
                };
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: number;
                    backgroundColor: string;
                };
                '.MuiTouchRipple-root': {
                    height: string;
                    width: string;
                    top: string;
                    left: string;
                };
            };
            thumb: {
                height: string;
                width: string;
                color: string;
            };
            track: {
                opacity: number;
                backgroundColor: string;
            };
        };
    };
    MuiAlert: {
        defaultProps: {
            variant: string;
            icon: boolean;
            severity: string;
        };
        styleOverrides: {
            root: {
                padding: string;
                borderRadius: string;
                borderWidth: string;
                borderStyle: string;
                boxShadow: string;
                borderColor: string;
                backgroundColor: string;
                color: string;
                alignItems: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            icon: {
                padding: string;
            };
            message: {
                flexGrow: number;
                padding: string;
            };
            action: {
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
            filledSuccess: {
                color: string;
                borderColor: string;
                backgroundColor: string;
            };
            filledInfo: {
                color: string;
                borderColor: string;
                backgroundColor: string;
            };
            filledWarning: {
                color: string;
                borderColor: string;
                backgroundColor: string;
            };
            filledError: {
                color: string;
                borderColor: string;
                backgroundColor: string;
            };
            outlinedSuccess: {
                color: string;
                backgroundColor: string;
            };
            outlinedInfo: {
                color: string;
                backgroundColor: string;
            };
            outlinedWarning: {
                color: string;
                backgroundColor: string;
            };
            outlinedError: {
                color: string;
                backgroundColor: string;
            };
        };
    };
    MuiInputLabel: {
        defaultProps: {
            shrink: boolean;
        };
        styleOverrides: {
            root: {
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
        };
    };
    MuiInputBase: {
        defaultProps: {
            size: string;
        };
        variants: ({
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
        styleOverrides: {
            root: {
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
            input: {
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
            adornedStart: {
                paddingLeft: string;
            };
            adornedEnd: {
                paddingRight: string;
            };
        };
    };
    MuiInputAdornment: {
        styleOverrides: {
            root: {
                color: string;
                '& .MuiSvgIcon-root': {
                    cursor: string;
                };
            };
            positionStart: {
                marginRight: string;
            };
            positionEnd: {
                marginLeft: string;
            };
        };
    };
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                border: string;
                borderRadius: string;
                padding: string;
                backgroundColor: string;
                '> .MuiToggleButtonGroup-grouped': {
                    border: string;
                    width: string;
                    height: string;
                    '&:not(:first-of-type)': {
                        borderRadius: string;
                        marginLeft: string;
                        border: string;
                    };
                    '&:first-of-type': {
                        borderRadius: string;
                    };
                    '&:hover': {
                        backgroundColor: string;
                    };
                    '&:not(.Mui-disabled)': {
                        color: string;
                        '&.Mui-selected': {
                            backgroundColor: string;
                            color: string;
                            '&:hover': {
                                backgroundColor: string;
                            };
                        };
                    };
                    '&.Mui-disabled': {
                        color: string;
                        border: string;
                        cursor: string;
                        pointerEvents: string;
                        '&.Mui-selected': {
                            backgroundColor: string;
                            '&:hover': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
            };
        };
    };
    MuiSvgIcon: {
        defaultProps: {
            fontSize: string;
        };
        styleOverrides: {
            colorIconSupportNegative: {
                color: string;
            };
            colorIconSupportPositive: {
                color: string;
            };
            colorIconSupportWarning: {
                color: string;
            };
            colorIconActionPrimary: {
                color: string;
            };
            colorIconActionSecondary: {
                color: string;
            };
            colorIconActionTertiary: {
                color: string;
            };
            colorIconOnSurface: {
                color: string;
            };
            colorIconDisabled: {
                color: string;
            };
            colorIconDefault: {
                color: string;
            };
            colorIconTypical: {
                color: string;
            };
            fontSizeScorched: {
                fontSize: string;
            };
            fontSizeTorrid: {
                fontSize: string;
            };
            fontSizeBlazzing: {
                fontSize: string;
            };
            fontSizeHot: {
                fontSize: string;
            };
            fontSizeTropical: {
                fontSize: string;
            };
            fontSizeWarm: {
                fontSize: string;
            };
            fontSizeMild: {
                fontSize: string;
            };
            fontSizeCool: {
                fontSize: string;
            };
            fontSizeCold: {
                fontSize: string;
            };
            fontSizeBitterCold: {
                fontSize: string;
            };
            fontSizeFrigid: {
                fontSize: string;
            };
            fontSizeFrostbite: {
                fontSize: string;
            };
            fontSizeBlizzard: {
                fontSize: string;
            };
            fontSizeIceAge: {
                fontSize: string;
            };
        };
    };
    MuiIcon: {
        defaultProps: {
            fontSize: string;
        };
        styleOverrides: {
            root: {
                height: string;
                width: string;
                lineHeight: string;
            };
            colorIconSupportNegative: {
                color: string;
            };
            colorIconSupportPositive: {
                color: string;
            };
            colorIconSupportWarning: {
                color: string;
            };
            colorIconActionPrimary: {
                color: string;
            };
            colorIconActionSecondary: {
                color: string;
            };
            colorIconActionTertiary: {
                color: string;
            };
            colorIconOnSurface: {
                color: string;
            };
            colorIconDisabled: {
                color: string;
            };
            colorIconDefault: {
                color: string;
            };
            colorIconTypical: {
                color: string;
            };
            fontSizeScorched: {
                fontSize: string;
            };
            fontSizeTorrid: {
                fontSize: string;
            };
            fontSizeBlazzing: {
                fontSize: string;
            };
            fontSizeHot: {
                fontSize: string;
            };
            fontSizeTropical: {
                fontSize: string;
            };
            fontSizeWarm: {
                fontSize: string;
            };
            fontSizeMild: {
                fontSize: string;
            };
            fontSizeCool: {
                fontSize: string;
            };
            fontSizeCold: {
                fontSize: string;
            };
            fontSizeBitterCold: {
                fontSize: string;
            };
            fontSizeFrigid: {
                fontSize: string;
            };
            fontSizeFrostbite: {
                fontSize: string;
            };
            fontSizeBlizzard: {
                fontSize: string;
            };
            fontSizeIceAge: {
                fontSize: string;
            };
        };
    };
    MuiRadio: {
        styleOverrides: {
            root: {
                padding: string;
                '&:hover': {
                    backgroundColor: string;
                    '.MuiTouchRipple-root': {
                        width: string;
                        height: string;
                        top: string;
                        left: string;
                        backgroundColor: string;
                    };
                };
                '&.Mui-focusVisible': {
                    '.MuiTouchRipple-root': {
                        width: string;
                        height: string;
                        top: string;
                        left: string;
                        backgroundColor: string;
                        '> .MuiTouchRipple-ripple': {
                            width: string;
                            height: string;
                            top: string;
                            left: string;
                            backgroundColor: string;
                            '> .MuiTouchRipple-childPulsate': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                '&.Mui-checked:not(.Mui-disabled)': {
                    '&:hover': {
                        backgroundColor: string;
                        '.MuiTouchRipple-root': {
                            width: string;
                            height: string;
                            top: string;
                            left: string;
                            backgroundColor: string;
                        };
                    };
                    '&.Mui-focusVisible': {
                        '.MuiTouchRipple-root': {
                            backgroundColor: string;
                            '> .MuiTouchRipple-ripple': {
                                backgroundColor: string;
                                '> .MuiTouchRipple-childPulsate': {
                                    backgroundColor: string;
                                };
                            };
                        };
                    };
                };
                '&.Mui-disabled': {
                    color: string;
                };
            };
        };
    };
    MuiStepper: {
        styleOverrides: {
            vertical: {
                '> .MuiStep-root': {
                    '&:first-of-type': {
                        paddingTop: string;
                    };
                    '&:last-of-type': {
                        paddingBottom: string;
                    };
                };
            };
        };
    };
    MuiStepLabel: {
        styleOverrides: {
            root: {
                paddingLeft: string;
                paddingRight: string;
                paddingTop: string;
                paddingBottom: string;
            };
            label: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                color: string;
                marginLeft: string;
                marginRight: string;
                '&.Mui-disabled': {
                    color: string;
                };
            };
            iconContainer: {
                fontSize: string;
                padding: string;
                margin: string;
                marginTop: string;
                marginBottom: string;
                '&.Mui-disabled': {
                    marginTop: string;
                    marginBottom: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    textTransform: string;
                    color: string;
                    height: string;
                    width: string;
                    marginLeft: string;
                    padding: string;
                    borderWidth: string;
                    borderStyle: string;
                    borderColor: string;
                    borderRadius: string;
                    display: string;
                    justifyContent: string;
                    alignItems: string;
                };
            };
        };
    };
    MuiStepConnector: {
        styleOverrides: {
            line: {
                borderLeftWidth: string;
                borderLeftStyle: string;
                borderLeftColor: string;
                minHeight: string;
            };
            vertical: {
                marginLeft: string;
            };
        };
    };
    MuiPaper: {
        defaultProps: {
            elevation: number;
        };
    };
    MuiMenu: {
        defaultProps: {
            disableAutoFocusItem: boolean;
        };
        styleOverrides: {
            list: {
                boxShadow: string;
                borderRadius: string;
            };
        };
    };
    MuiMenuItem: {
        styleOverrides: {
            root: {
                '> * ': {
                    zIndex: number;
                };
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                '&:focus-visible:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                '&:active:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                paddingTop: string;
                paddingBottom: string;
                paddingLeft: string;
                paddingRight: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                '&.Mui-selected': {
                    backgroundColor: string;
                };
                '&.Mui-selected:hover': {
                    backgroundColor: string;
                };
            };
        };
    };
    MuiLink: {
        defaultProps: {
            color: string;
            variant: string;
            underline: string;
        };
        styleOverrides: {
            root: {
                cursor: string;
                textDecorationColor: string;
                textUnderlinePosition: string;
                '&:visited': {
                    color: string;
                    textDecorationColor: string;
                };
                '&:active': {
                    color: string;
                    textDecorationColor: string;
                };
                '&:disabled': {
                    color: string;
                    textDecorationColor: string;
                };
                '&:focus': {
                    textDecoration: string;
                };
            };
        };
    };
    MuiIconButton: {
        defaultProps: {
            color: string;
        };
        styleOverrides: {
            root: {
                padding: string;
                fontSize: string;
            };
            colorIconSupportNegative: {
                color: string;
            };
            colorIconSupportPositive: {
                color: string;
            };
            colorIconSupportWarning: {
                color: string;
            };
            colorIconActionPrimary: {
                color: string;
            };
            colorIconActionSecondary: {
                color: string;
            };
            colorIconActionTertiary: {
                color: string;
            };
            colorIconOnSurface: {
                color: string;
            };
            colorIconDisabled: {
                color: string;
            };
            colorIconDefault: {
                color: string;
            };
            colorIconTypical: {
                color: string;
            };
        };
    };
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                textTransform: string;
                margin: string;
                marginTop: string;
                paddingLeft: string;
                paddingTop: string;
                paddingBottom: string;
                minHeight: string;
            };
        };
    };
    MuiFormControlLabel: {
        styleOverrides: {
            root: {
                '&.Mui-disabled': {
                    '&:hover': {
                        pointerEvents: string;
                        cursor: string;
                    };
                };
            };
            label: {
                padding: string;
                paddingRight: string;
                marginLeft: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            labelPlacementStart: {
                marginLeft: string;
                marginRight: string;
            };
        };
    };
    MuiFab: {
        defaultProps: {
            size: string;
            color: string;
        };
        styleOverrides: {
            root: {
                boxShadow: string;
                textTransform: string;
                height: string;
                width: string;
                borderRadius: string;
                '&.MuiFab-default': {
                    backgroundColor: string;
                };
                '&.MuiFab-extended .MuiTypography-root': {
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginLeft: string;
                };
            };
        };
        variants: ({
            props: {
                size: string;
                color?: undefined;
            };
            style: {
                padding: string;
                '&.MuiFab-extended': {
                    paddingRight: string;
                };
                fontSize?: undefined;
                '> .MuiIcon-root'?: undefined;
            };
        } | {
            props: {
                size: string;
                color?: undefined;
            };
            style: {
                padding: string;
                fontSize: string;
                '&.MuiFab-extended': {
                    paddingRight: string;
                };
                '> .MuiIcon-root': {
                    fontSize: string;
                };
            };
        } | {
            props: {
                color: string;
                size?: undefined;
            };
            style: {
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                padding?: undefined;
                '&.MuiFab-extended'?: undefined;
                fontSize?: undefined;
                '> .MuiIcon-root'?: undefined;
            };
        })[];
    };
    MuiDivider: {
        defaultProps: {
            'ds-size': string;
        };
        styleOverrides: {
            root: {
                borderColor: string;
            };
            light: {
                borderColor: string;
            };
        };
        variants: {
            props: {
                'ds-size': string;
            };
            style: {
                borderWidth: string;
            };
        }[];
    };
    MuiDialog: {
        defaultProps: {
            scroll: string;
            maxWidth: string;
        };
        styleOverrides: {
            paper: {
                backgroundColor: string;
                borderRadius: string;
                boxShadow: string;
            };
            paperWidthXs: {
                maxWidth: string;
            };
        };
    };
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                color: string;
                paddingLeft: string;
                paddingRight: string;
                paddingBottom: string;
                paddingTop: string;
                textAlign: string;
            };
        };
    };
    MuiDialogContent: {
        variants: {
            props: {
                textOnly: boolean;
            };
            style: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                paddingBottom: string;
                textAlign: string;
            };
        }[];
        styleOverrides: {
            root: {
                color: string;
                paddingLeft: string;
                paddingRight: string;
                paddingBottom: string;
            };
        };
    };
    MuiDialogActions: {
        styleOverrides: {
            root: {
                padding: string;
                '> *': {
                    flex: number;
                };
            };
        };
    };
    MuiCalendarPicker: {
        styleOverrides: {
            root: {};
        };
    };
    MuiPickersDay: {
        styleOverrides: {
            root: {
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
        };
    };
    MuiChip: {
        variants: ({
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
        styleOverrides: {
            root: {
                paddingTop: string;
                paddingBottom: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            filled: {
                backgroundColor: string;
                border: string;
                '> .MuiIcon-root': {
                    color: string;
                };
            };
            filledSecondary: {
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
            label: {
                paddingTop: string;
                paddingBottom: string;
                paddingLeft: string;
                paddingRight: string;
            };
            icon: {
                fontSize: string;
                marginLeft: string;
                marginRight: string;
            };
            deleteIcon: {
                fontSize: string;
                marginRight: string;
                marginLeft: string;
            };
        };
    };
    MuiButton: {
        defaultProps: {
            variant: string;
            size: string;
            color: string;
            disableElevation: boolean;
        };
        styleOverrides: {
            root: {
                borderRadius: number;
                textTransform: string;
                '&.Mui-disabled': {
                    cursor: string;
                    pointerEvents: string;
                };
            };
            containedSecondary: {
                '> * ': {
                    zIndex: number;
                };
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                '&:focus-visible:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                '&:active:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                backgroundColor: string;
                            };
                        };
                    };
                };
                backgroundColor: string;
                borderWidth: string;
                borderStyle: string;
                borderColor: string;
                color: string;
                '&:disabled': {
                    backgroundColor: string;
                    color: string;
                };
            };
            text: {
                '&:hover': {
                    backgroundColor: string;
                };
                '> .MuiTouchRipple-root': {
                    display: string;
                };
            };
            sizeLarge: {
                padding: string;
                height: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            sizeMedium: {
                padding: string;
                height: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            sizeSmall: {
                padding: string;
                height: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            iconSizeLarge: {
                fontSize: string;
                '&.MuiButton-startIcon': {
                    marginRight: string;
                };
                '&.MuiButton-endIcon': {
                    marginLeft: string;
                };
            };
            iconSizeMedium: {
                fontSize: string;
                '&.MuiButton-startIcon': {
                    marginRight: string;
                };
                '&.MuiButton-endIcon': {
                    marginLeft: string;
                };
            };
            iconSizeSmall: {
                fontSize: string;
                '&.MuiButton-startIcon': {
                    marginRight: string;
                };
                '&.MuiButton-endIcon': {
                    marginLeft: string;
                };
            };
            textSizeSmall: {
                height: string;
                color: string;
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                borderRadius: number;
                '&.MuiIcon-root': {
                    fontSize: string;
                    '&.MuiButton-startIcon': {
                        marginRight: string;
                    };
                    '&.MuiButton-endIcon': {
                        marginLeft: string;
                    };
                };
                '&:disabled': {
                    color: string;
                };
            };
            textSizeMedium: {
                height: string;
                color: string;
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                borderRadius: number;
                '&.MuiIcon-root': {
                    fontSize: string;
                    '&.MuiButton-startIcon': {
                        marginRight: string;
                    };
                    '&.MuiButton-endIcon': {
                        marginLeft: string;
                    };
                };
                '&:disabled': {
                    color: string;
                };
            };
            textSizeLarge: {
                height: string;
                color: string;
                padding: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                borderRadius: number;
                '&.MuiIcon-root': {
                    fontSize: string;
                    '&.MuiButton-startIcon': {
                        marginRight: string;
                    };
                    '&.MuiButton-endIcon': {
                        marginLeft: string;
                    };
                };
                '&:disabled': {
                    color: string;
                };
            };
        };
        variants: ({
            props: {
                variant: string;
                color?: undefined;
            };
            style: {
                borderRadius: number;
                color: string;
                backgroundColor: string;
            };
        } | {
            props: {
                color: string;
                variant?: undefined;
            };
            style: {
                '> * ': {
                    zIndex: number;
                };
                '&:hover:not(.Mui-disabled)': {
                    backgroundColor: string;
                };
                '&:focus-visible:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                mixBlendMode: string;
                                backgroundColor: string;
                            };
                        };
                    };
                };
                '&:active:not(.Mui-disabled)': {
                    '& .MuiTouchRipple-root': {
                        opacity: number;
                        zIndex: number;
                        '& .MuiTouchRipple-ripple.MuiTouchRipple-rippleVisible': {
                            opacity: number;
                            '& .MuiTouchRipple-child': {
                                mixBlendMode: string;
                                backgroundColor: string;
                            };
                        };
                    };
                };
                color: string;
                '&:disabled': {
                    color: string;
                    backgroundColor: string;
                };
                borderRadius?: undefined;
                backgroundColor?: undefined;
            };
        })[];
    };
    MuiBadge: {
        defaultProps: {
            color: string;
            showZero: boolean;
        };
        styleOverrides: {
            standard: {
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
                padding: string;
                minWidth: string;
                height: string;
                borderRadius: string;
            };
        };
    };
    MuiBackdrop: {
        variants: {
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
    };
    MuiAvatar: {
        defaultProps: {
            'ds-size': string;
        };
        variants: ({
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
    };
    MuiAutocomplete: {
        styleOverrides: {
            listbox: {
                '.MuiAutocomplete-option': {
                    '&.Mui-focused': {
                        backgroundColor: string;
                    };
                };
            };
        };
    };
    MuiListItemButton: {
        variants: {
            props: {
                'ds-variant': string;
            };
            style: {
                paddingLeft: string;
            };
        }[];
    };
    MuiListItemIcon: {
        variants: {
            props: {
                'ds-variant': string;
            };
            style: {
                width: string;
            };
        }[];
    };
    MuiAppBar: {
        variants: {
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
        defaultProps: {
            color: string;
            enableColorOnDark: boolean;
            elevation: number;
        };
    };
    MuiToolbar: {
        styleOverrides: {
            root: {
                padding: string;
                minHeight: string;
                '@media (min-width: 0px)': {
                    padding: string;
                    minHeight: string;
                };
            };
        };
    };
    MuiDrawer: {
        variants: {
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
        styleOverrides: {
            paper: {
                backgroundColor: string;
                boxShadow: string;
            };
            paperAnchorBottom: {
                backgroundColor: string;
            };
            paperAnchorRight: {
                paddingTop: string;
                borderTopLeftRadius: string;
                width: string;
                backgroundColor: string;
                backgroundImage: string;
            };
        };
    };
    MuiAccordion: {
        defaultProps: {
            TransitionProps: {
                unmountOnExit: boolean;
            };
        };
        styleOverrides: {
            root: {
                backgroundColor: string;
                boxShadow: string;
                overflow: string;
                borderStyle: string;
                borderColor: string;
                borderWidth: string;
                '&:first-of-type': {
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                };
                '&:not(:first-of-type):not(.Mui-expanded)': {
                    marginTop: string;
                };
                '&:last-of-type': {
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
        };
    };
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                padding: string;
                '&.Mui-expanded': {
                    borderBottomStyle: string;
                    borderBottomWidth: string;
                    borderBottomColor: string;
                    minHeight: string;
                };
            };
            content: {
                margin: string;
                width: string;
                marginRight: string;
                '&.Mui-expanded': {
                    margin: string;
                    marginRight: string;
                };
            };
        };
    };
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                border: string;
                paddingTop: string;
                paddingBottom: string;
                paddingLeft: string;
                paddingRight: string;
            };
        };
    };
};
