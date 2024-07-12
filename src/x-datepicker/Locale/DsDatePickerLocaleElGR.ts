import { elGR } from '@mui/x-date-pickers/locales'
import el from 'date-fns/locale/el'

export const DsDatePickerLocaleElGR = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: el,
        localeText: {
          ...elGR.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Επιβεβαίωση'
        }
      }
    }
  }
}
