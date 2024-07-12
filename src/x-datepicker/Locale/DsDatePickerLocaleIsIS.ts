import { isIS } from '@mui/x-date-pickers/locales'
import is from 'date-fns/locale/is'

export const DsDatePickerLocaleIsIS = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: is,
        localeText: {
          ...isIS.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Staðfesta'
        }
      }
    }
  }
}
