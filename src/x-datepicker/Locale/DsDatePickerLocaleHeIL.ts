import { heIL } from '@mui/x-date-pickers/locales'
import he from 'date-fns/locale/he'

export const DsDatePickerLocaleHeIL = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: he,
        localeText: {
          ...heIL.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'אשר'
        }
      }
    }
  }
}
