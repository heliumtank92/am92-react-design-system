import { zhCN as ZhCN } from '@mui/x-date-pickers/locales'
import zhCN from 'date-fns/locale/zh-CN'

export const DsDatePickerLocaleZhCN = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: zhCN,
        localeText: {
          ...ZhCN.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: '确认'
        }
      }
    }
  }
}
