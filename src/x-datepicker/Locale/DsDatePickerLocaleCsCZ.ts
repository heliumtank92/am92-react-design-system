import { csCZ } from '@mui/x-date-pickers/locales'
import cs from 'date-fns/locale/cs'

export const DsDatePickerLocaleCsCZ = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: cs,
        localeText: {
          ...csCZ.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Potvrdit'
        }
      }
    }
  }
}
