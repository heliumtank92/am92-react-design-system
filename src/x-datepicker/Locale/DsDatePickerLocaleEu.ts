import { eu as Eu } from '@mui/x-date-pickers/locales'
import eu from 'date-fns/locale/eu'

export const DsDatePickerLocaleEu = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: eu,
        localeText: {
          ...Eu.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Berretsi'
        }
      }
    }
  }
}
