export class DsNotistackProvider {
    static defaultProps: {
        hideIconVariant: boolean;
    };
    render(): JSX.Element;
}
import { closeSnackbar } from 'notistack';
import { enqueueSnackbar } from 'notistack';
import { useSnackbar } from 'notistack';
export function buildEnqueueSnackbarProps(options?: {}): {
    key: number;
};
export { closeSnackbar, enqueueSnackbar, useSnackbar };
