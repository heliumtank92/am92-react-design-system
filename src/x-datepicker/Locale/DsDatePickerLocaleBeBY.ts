import { beBY } from '@mui/x-date-pickers/locales'
import be from 'date-fns/locale/be'

export const DsDatePickerLocaleBeBY = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: be,
        localeText: {
          ...beBY.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Пацвердзіць'
        }
      }
    }
  }
}
