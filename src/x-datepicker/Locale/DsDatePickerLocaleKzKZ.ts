import { kzKZ } from '@mui/x-date-pickers/locales'
import kk from 'date-fns/locale/kk'

export const DsDatePickerLocaleKzKZ = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: kk,
        localeText: {
          ...kzKZ.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Растау'
        }
      }
    }
  }
}
