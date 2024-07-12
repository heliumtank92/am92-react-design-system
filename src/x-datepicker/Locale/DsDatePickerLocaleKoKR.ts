import { koKR } from '@mui/x-date-pickers/locales'
import ko from 'date-fns/locale/ko'

export const DsDatePickerLocaleKoKR = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: ko,
        localeText: {
          ...koKR.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: '확인'
        }
      }
    }
  }
}
