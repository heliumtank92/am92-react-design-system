import { trTR } from '@mui/x-date-pickers/locales'
import tr from 'date-fns/locale/tr'

export const DsDatePickerLocaleTrTR = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: tr,
        localeText: {
          ...trTR.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Onayla'
        }
      }
    }
  }
}
