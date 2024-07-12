import { caES } from '@mui/x-date-pickers/locales'
import ca from 'date-fns/locale/ca'

export const DsDatePickerLocaleCaES = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: ca,
        localeText: {
          ...caES.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Confirmar'
        }
      }
    }
  }
}
