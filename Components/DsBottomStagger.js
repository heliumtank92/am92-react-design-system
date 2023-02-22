import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import DsRemixIcon from './DsRemixIcon'
import DsTypo from './DsTypo'
import DsBox from './DsBox'
import DsIconButton from './DsIconButton'

export class DsBottomStagger extends PureComponent {
  static propTypes = {
    kicker: PropTypes.node,
    title: PropTypes.node,
    buttonGroup: PropTypes.element
  }

  static defaultProps = {}

  render () {
    const {
      kicker,
      title,
      buttonGroup,
      flushedButtonGroup,

      children,
      ...restProps
    } = this.props

    const { onClose } = restProps
    const padded = !!buttonGroup?.props?.noPadding
    const drawerButtonGroup = buttonGroup && React.cloneElement(buttonGroup, { size: 'large', fullWidth: true })

    return (
      <>
        <SwipeableDrawer
          anchor='bottom'
          elevation={0}
          {...restProps}
        >
          <DsBox
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: 'var(--ds-spacing-bitterCold)'
            }}
          >
            <DsIconButton
              onClick={onClose}
              sx={{
                backgroundColor: 'var(--ds-color-iconDefault)',
                color: 'var(--ds-color-iconDisabled)',
                borderRadius: '50%',
                p: 'var(--ds-spacing-glacial)'
              }}
            >
              <DsRemixIcon className='ri-close-line' />
            </DsIconButton>
          </DsBox>
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
                <DsTypo
                  variant='subheadingSemiboldDefault'
                  color='text.tertiary'
                  component='div'
                  sx={{
                    mb: 'var(--ds-spacing-quickFreeze)',
                    textTransform: 'var(--ds-typo-casingUppercase)'
                  }}
                >
                  {kicker}
                </DsTypo>
              )}
              {title && (
                <DsTypo
                  variant='headingBoldMedium'
                  component='div'
                  sx={{
                    mb: 'var(--ds-spacing-mild)'
                  }}
                >
                  {title}
                </DsTypo>
              )}
            </DsBox>
            <DsBox
              sx={{
                maxHeight: 'var(--ds-rules-bottomStaggerWorkingAreaHeight)',
                overflow: 'auto',
                mb: padded ? 'var(--ds-spacing-mild)' : 'var(--ds-spacing-glacial)'
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
        </SwipeableDrawer>
      </>
    )
  }
}

export default DsBottomStagger
