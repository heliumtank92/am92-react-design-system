import { faIR as FaIR } from '@mui/x-date-pickers/locales'
import faIR from 'date-fns/locale/fa-IR'

export const DsDatePickerLocaleFaIR = {
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        adapterLocale: faIR,
        localeText: {
          ...FaIR.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: 'تایید'
        }
      }
    }
  }
}
