import { daDK } from '@mui/x-date-pickers/locales'
import da from 'date-fns/locale/da'

export const DsDatePickerLocaleDaDK = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: da,
        localeText: {
          ...daDK.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Bekræft'
        }
      }
    }
  }
}
