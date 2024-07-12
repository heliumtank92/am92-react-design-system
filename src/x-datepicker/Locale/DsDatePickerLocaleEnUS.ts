import { enUS as EnUS } from '@mui/x-date-pickers/locales'
import enUS from 'date-fns/locale/en-US'

export const DsDatePickerLocaleEnUS = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: enUS,
        localeText: {
          ...EnUS.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Confirm'
        }
      }
    }
  }
}
