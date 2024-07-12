import { ukUA } from '@mui/x-date-pickers/locales'
import uk from 'date-fns/locale/uk'

export const DsDatePickerLocaleUkUA = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: uk,
        localeText: {
          ...ukUA.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Підтвердити'
        }
      }
    }
  }
}
