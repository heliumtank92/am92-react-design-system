import * as React from 'react'
import { DsDialogDefaultProps, DsDialogProps } from './DsDialog.Types'
import { DsDialogTitle } from '../DsDialogTitle'
import { Dialog } from '@mui/material'
import { DsIconButton } from '../DsIconButton'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsTypography } from '../DsTypography'
import { DsDialogContent } from '../DsDialogContent'
import { DsDialogActions } from '../DsDialogActions'
import { DsButton } from '../DsButton'

export class DsDialog extends React.Component<DsDialogProps> {
  static defaultProps = DsDialogDefaultProps
  handleDialogClose = (
    event: React.SyntheticEvent,
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    const { onClose } = this.props
    if (typeof onClose === 'function') {
      onClose(event, reason)
    }
  }

  handleCloseClick = (event: React.SyntheticEvent) => {
    const { onClose } = this.props
    if (typeof onClose === 'function') {
      onClose(event, 'backdropClick')
    }
  }

  public render() {
    const {
      title,
      description,
      showClose,
      primaryButtonText,
      primaryButtonProps,
      secondaryButtonText,
      secondaryButtonProps,
      PaperProps,
      DialogTitleProps,
      DialogDescriptionProps,
      DialogCloseIconButtonProps,
      DialogCloseIconProps,
      DialogContentProps,
      DialogActionsProps,
      children,
      ...DialogProps
    } = this.props

    const actionsAvailable = !!(primaryButtonText || secondaryButtonText)
    const accessibilityProps: Partial<DsDialogProps> = {}

    if (title) {
      accessibilityProps['aria-labelledby'] = title
    }

    if (description) {
      accessibilityProps['aria-describedby'] = description
    }

    return (
      <Dialog
        keepMounted
        {...accessibilityProps}
        {...DialogProps}
        PaperProps={{
          ...PaperProps,
          sx: {
            p: {
              xs: 'var(--ds-spacing-bitterCold)',
              md: 'var(--ds-spacing-warm)'
            },
            pt: {
              xs: 'var(--ds-spacing-mild)',
              md: 'var(--ds-spacing-warm)'
            },
            ...PaperProps?.sx
          }
        }}
      >
        {title && (
          <DsDialogTitle
            {...DialogTitleProps}
            sx={{
              width: showClose ? 'calc(100% - 44px)' : '100%',
              ...DialogTitleProps?.sx
            }}
          >
            {title}
          </DsDialogTitle>
        )}
        {description && (
          <DsTypography
            {...DialogDescriptionProps}
            variant="subheadingSemiboldDefault"
            color="text.secondary"
          >
            {description}
          </DsTypography>
        )}
        {showClose && (
          <DsIconButton
            onClick={this.handleCloseClick}
            {...DialogCloseIconButtonProps}
            sx={{
              position: 'absolute',
              padding: 'var(--ds-spacing-quickFreeze)',
              borderRadius: '24px',
              top: {
                xs: 'var(--ds-spacing-mild)',
                md: 'var(--ds-spacing-warm)'
              },
              right: {
                xs: 'var(--ds-spacing-bitterCold)',
                md: 'var(--ds-spacing-warm)'
              },
              ...DialogCloseIconButtonProps?.sx
            }}
          >
            <DsRemixIcon className="ri-close-line" {...DialogCloseIconProps} />
          </DsIconButton>
        )}
        {children && (
          <DsDialogContent {...DialogContentProps}>{children}</DsDialogContent>
        )}
        {actionsAvailable && (
          <DsDialogActions {...DialogActionsProps}>
            {secondaryButtonText && (
              <DsButton
                color="secondary"
                size="medium"
                fullWidth
                {...secondaryButtonProps}
              >
                {secondaryButtonText}
              </DsButton>
            )}
            {primaryButtonText && (
              <DsButton size="medium" fullWidth {...primaryButtonProps}>
                {primaryButtonText}
              </DsButton>
            )}
          </DsDialogActions>
        )}
      </Dialog>
    )
  }
}
