import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'

import { DsBox } from '../DsBox'
import { DsImage } from '../DsImage'
import { DsTypography } from '../DsTypography'
import { DsRemixIcon } from '../DsRemixIcon'
import { DsIconButton } from '../DsIconButton'
import { DsStack } from '../DsStack'

export default class DsDialog extends PureComponent {
  static propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    buttonGroup: PropTypes.element,

    textAlign: PropTypes.string,
    showClose: PropTypes.bool,

    fullWidth: PropTypes.bool
  }

  static defaultProps = {
    imageSrc: '',
    imageAlt: '',
    textAlign: 'left',
    showClose: true,
    fullWidth: true
  }

  render() {
    const {
      imageSrc,
      imageAlt,
      heading,
      description,
      buttonGroup,

      textAlign,
      showClose,

      onClose,

      children,

      ...restDialogProps
    } = this.props

    return (
      <Dialog
        onClose={onClose}
        {...restDialogProps}
        PaperProps={{
          sx: {
            paddingTop: {
              xs: 'var(--ds-spacing-mild)',
              md: 'calc(var(--ds-spacing-mild) + var(--ds-spacing-warm))'
            },
            paddingLeft: {
              xs: 'var(--ds-spacing-bitterCold)',
              md: 'calc(var(--ds-spacing-bitterCold) + var(--ds-spacing-warm))'
            },
            paddingRight: {
              xs: 'var(--ds-spacing-bitterCold)',
              md: 'calc(var(--ds-spacing-bitterCold) + var(--ds-spacing-warm))'
            },
            paddingBottom: {
              xs: 'var(--ds-spacing-mild)',
              md: 'calc(var(--ds-spacing-bitterCold) + var(--ds-spacing-mild))'
            },
            position: 'relative'
          }
        }}
      >
        {showClose && (
          <DsIconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              padding: 'var(--ds-spacing-glacial)',
              borderRadius: '8px',
              top: {
                xs: 'calc(var(--ds-spacing-mild) + var(--ds-spacing-mild))',
                md: 'calc(var(--ds-spacing-mild))'
              },
              right: {
                xs: 'calc(var(--ds-spacing-bitterCold) + var(--ds-spacing-bitterCold))',
                md: 'calc(var(--ds-spacing-mild))'
              }
            }}
          >
            <DsRemixIcon className="ri-close-line" />
          </DsIconButton>
        )}
        <DsStack
          spacing={{
            xs: 'var(--ds-spacing-bitterCold)',
            md: 'var(--ds-spacing-warm)'
          }}
        >
          {imageSrc && (
            <DsBox
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              <DsImage src={imageSrc} alt={imageAlt} />
            </DsBox>
          )}
          <DsBox
            sx={{
              width: '100%'
            }}
          >
            {heading && (
              <DsTypography
                variant="headingBoldMedium"
                component="div"
                textAlign={textAlign}
                sx={{
                  mb: {
                    xs: 'var(--ds-spacing-bitterCold)',
                    md: 'var(--ds-spacing-glacial)'
                  },
                  p: 'var(--ds-spacing-glacial)  var(--ds-spacing-pleasant) var(--ds-spacing-zero)  var(--ds-spacing-pleasant)'
                }}
              >
                {heading}
              </DsTypography>
            )}
            {description && (
              <DsTypography
                variant="bodyRegularLarge"
                component="div"
                textAlign={textAlign}
                color="text.secondary"
                sx={{
                  p: 'var(--ds-spacing-zero)  var(--ds-spacing-pleasant) var(--ds-spacing-glacial)  var(--ds-spacing-pleasant)'
                }}
              >
                {description}
              </DsTypography>
            )}
            {children}
          </DsBox>
          {buttonGroup && (
            <DialogActions disableSpacing>
              {buttonGroup &&
                React.cloneElement(buttonGroup, {
                  size: 'medium',
                  noPadding: true,
                  fullWidth: true
                })}
            </DialogActions>
          )}
        </DsStack>
      </Dialog>
    )
  }
}
