import { itIT } from '@mui/x-date-pickers/locales'
import it from 'date-fns/locale/it'

export const DsDatePickerLocaleItIT = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: it,
        localeText: {
          ...itIT.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Confermare'
        }
      }
    }
  }
}
