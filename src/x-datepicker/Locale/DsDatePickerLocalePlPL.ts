import { plPL } from '@mui/x-date-pickers/locales'
import pl from 'date-fns/locale/pl'

export const DsDatePickerLocalePlPL = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: pl,
        localeText: {
          ...plPL.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Potwierdź'
        }
      }
    }
  }
}
