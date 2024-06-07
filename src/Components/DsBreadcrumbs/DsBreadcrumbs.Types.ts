import { BreadcrumbsProps } from '@mui/material'
import ExpandCollapsedIcon from './ExpandCollapsedIcon.Component'

export interface DsBreadcrumbsProps extends BreadcrumbsProps {}

export const DsBreadcrumbsDefaultProps: DsBreadcrumbsProps = {
  maxItems: 4,
  itemsAfterCollapse: 3,
  itemsBeforeCollapse: 1,
  slots: { CollapsedIcon: ExpandCollapsedIcon }
}
