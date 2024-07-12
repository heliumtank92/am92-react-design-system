import { urPK } from '@mui/x-date-pickers/locales'

export const DsDatePickerLocaleUrPK = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: {
          ...urPK.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'تصدیق کریں'
        }
      }
    }
  }
}
