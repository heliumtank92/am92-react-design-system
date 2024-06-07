import { CheckboxProps } from '@mui/material'
import { DsRemixIcon } from '../DsRemixIcon'

export interface DsCheckboxProps extends CheckboxProps {}

export const DsCheckboxDefaultProps: DsCheckboxProps = {
  color: 'secondary',
  icon: <DsRemixIcon className="ri-checkbox-blank-line" color="inherit" />,
  checkedIcon: <DsRemixIcon className="ri-checkbox-fill" color="inherit" />,
  indeterminateIcon: (
    <DsRemixIcon className="ri-checkbox-indeterminate-fill" color="inherit" />
  )
}
