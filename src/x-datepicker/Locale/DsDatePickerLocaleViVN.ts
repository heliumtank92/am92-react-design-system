import { viVN } from '@mui/x-date-pickers/locales'
import vi from 'date-fns/locale/vi'

export const DsDatePickerLocaleViVN = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: vi,
        localeText: {
          ...viVN.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Xác nhận'
        }
      }
    }
  }
}
