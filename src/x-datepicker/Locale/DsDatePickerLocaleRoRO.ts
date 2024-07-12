import { roRO } from '@mui/x-date-pickers/locales'
import ro from 'date-fns/locale/ro'

export const DsDatePickerLocaleRoRO = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: ro,
        localeText: {
          ...roRO.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Confirma'
        }
      }
    }
  }
}
