import { mk as Mk } from '@mui/x-date-pickers/locales'
import mk from 'date-fns/locale/mk'

export const DsDatePickerLocaleMk = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: mk,
        localeText: {
          ...Mk.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'Потврди'
        }
      }
    }
  }
}
