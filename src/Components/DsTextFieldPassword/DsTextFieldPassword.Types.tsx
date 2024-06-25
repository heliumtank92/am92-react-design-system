import { DsButton } from '../DsButton'
import { DsTextFieldDefaultProps, DsTextFieldProps } from '../DsTextField'

export interface DsTextFieldPasswordProps
  extends Omit<DsTextFieldProps, 'endAdornment'> {
  isVisible: boolean
  toggleNode?: {
    toShow: React.ReactElement
    toHide: React.ReactElement
  }
}

export const DsTextFieldPasswordDefaultProps: DsTextFieldPasswordProps = {
  ...DsTextFieldDefaultProps,
  isVisible: false,
  toggleNode: {
    toShow: (
      <DsButton variant="text" color="secondary" sx={{ minWidth: '50px' }}>
        SHOW
      </DsButton>
    ),
    toHide: (
      <DsButton variant="text" color="secondary" sx={{ minWidth: '50px' }}>
        HIDE
      </DsButton>
    )
  }
}

export interface DsTextFieldPasswordState {
  isVisible: boolean
}

export const DsTextFieldPasswordDefaultState: DsTextFieldPasswordState = {
  isVisible: false
}
