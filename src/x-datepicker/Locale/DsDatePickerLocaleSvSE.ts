import { svSE } from '@mui/x-date-pickers/locales'
import sv from 'date-fns/locale/sv'

export const DsDatePickerLocaleSvSE = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: sv,
        localeText: {
          ...svSE.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Bekräfta'
        }
      }
    }
  }
}
