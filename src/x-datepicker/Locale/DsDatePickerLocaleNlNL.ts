import { nlNL } from '@mui/x-date-pickers/locales'
import nl from 'date-fns/locale/nl'

export const DsDatePickerLocaleNlNL = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: nl,
        localeText: {
          ...nlNL.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Bevestigen'
        }
      }
    }
  }
}
