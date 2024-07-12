import { esES } from '@mui/x-date-pickers/locales'
import es from 'date-fns/locale/es'

export const DsDatePickerLocaleEsES = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: es,
        localeText: {
          ...esES.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Confirmar'
        }
      }
    }
  }
}
