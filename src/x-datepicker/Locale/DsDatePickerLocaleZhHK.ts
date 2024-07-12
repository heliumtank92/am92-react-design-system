import { zhHK as ZhHK } from '@mui/x-date-pickers/locales'
import zhHK from 'date-fns/locale/zh-HK'

export const DsDatePickerLocaleZhHK = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: zhHK,
        localeText: {
          ...ZhHK.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: '確認'
        }
      }
    }
  }
}
