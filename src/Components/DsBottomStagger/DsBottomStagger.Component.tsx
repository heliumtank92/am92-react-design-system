import React, { PureComponent } from 'react'

import { DsRemixIcon } from '../DsRemixIcon'
import { DsTypography } from '../DsTypography'
import { DsBox } from '../DsBox'
import { DsIconButton } from '../DsIconButton'
import { DsDrawer } from '../DsDrawer'
import {
  DsBottomStaggerProps,
  DsBottomStaggerDefaultProps
} from './DsBottomStagger.Types'

export class DsBottomStagger extends PureComponent<DsBottomStaggerProps> {
  static defaultProps = DsBottomStaggerDefaultProps

  handleDrawerClose = (
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

  render() {
    const {
      kicker,
      bottomStaggerTitle,
      buttonGroup,
      showClose,

      children,
      onClose,
      ...restProps
    } = this.props

    const padded = !!buttonGroup?.props?.noPadding
    const drawerButtonGroup =
      buttonGroup &&
      React.cloneElement(buttonGroup, {
        size: 'large',
        fullWidth: true
      })

    return (
      <>
        <DsDrawer
          anchor="bottom"
          {...restProps}
          onClose={this.handleDrawerClose}
        >
          {showClose && (
            <DsBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 'var(--ds-spacing-bitterCold)'
              }}
            >
              <DsIconButton
                onClick={this.handleCloseClick}
                sx={{
                  backgroundColor: 'var(--ds-color-iconDefault)',
                  color: 'var(--ds-color-iconDisabled)',
                  borderRadius: '50%',
                  p: 'var(--ds-spacing-glacial)'
                }}
              >
                <DsRemixIcon className="ri-close-line" />
              </DsIconButton>
            </DsBox>
          )}
          <DsBox
            sx={{
              boxShadow: 'var(--ds-elevation-0)',
              borderRadius: '16px 16px 0px 0px',
              backgroundColor: 'var(--ds-color-surfacePrimary)',
              pt: 'var(--ds-spacing-mild)'
            }}
          >
            <DsBox
              sx={{
                px: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {kicker && (
                <DsTypography
                  variant="subheadingSemiboldDefault"
                  color="text.tertiary"
                  component="div"
                  sx={{
                    mb: 'var(--ds-spacing-quickFreeze)',
                    textTransform: 'var(--ds-typo-casingUppercase)'
                  }}
                >
                  {kicker}
                </DsTypography>
              )}
              {bottomStaggerTitle && (
                <DsTypography
                  variant="headingBoldMedium"
                  component="div"
                  sx={{
                    mb: 'var(--ds-spacing-mild)'
                  }}
                >
                  {bottomStaggerTitle}
                </DsTypography>
              )}
            </DsBox>
            <DsBox
              sx={{
                maxHeight: 'var(--ds-rules-bottomStaggerWorkingAreaHeight)',
                overflow: 'auto',
                mb: padded
                  ? 'var(--ds-spacing-mild)'
                  : 'var(--ds-spacing-glacial)'
              }}
            >
              <DsBox
                sx={{
                  px: 'var(--ds-spacing-bitterCold)'
                }}
              >
                {children}
              </DsBox>
            </DsBox>
            {drawerButtonGroup}
          </DsBox>
        </DsDrawer>
      </>
    )
  }
}
