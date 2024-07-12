import { ruRU } from '@mui/x-date-pickers/locales'
import ru from 'date-fns/locale/ru'

export const DsDatePickerLocaleRuRU = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: ru,
        localeText: {
          ...ruRU.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Подтвердить'
        }
      }
    }
  }
}
