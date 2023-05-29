export class DsNotistackProvider extends Component<any, any, any> {
    static defaultProps: {
        hideIconVariant: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import { closeSnackbar } from "notistack";
import { enqueueSnackbar } from "notistack";
import { useSnackbar } from "notistack";
export function buildNotificationProps(notificationObj: any): any;
import { Component } from "react";
export { closeSnackbar, enqueueSnackbar, useSnackbar };
