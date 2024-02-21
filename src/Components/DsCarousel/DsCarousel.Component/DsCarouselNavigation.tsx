import * as React from 'react'

import { DsCarouselNavigationProps } from '../DsCarousel.Types'
import { DsIconButton } from '../../DsIconButton'
import { DsRemixIcon } from '../../DsRemixIcon'

export default class DsCarouselNavigation extends React.PureComponent<DsCarouselNavigationProps> {
  render() {
    const { isEnabled, NavigationProps = {} } = this.props
    if (!isEnabled) {
      return false
    }

    const { PrevButtonProps = {}, NextButtonProps = {} } = NavigationProps

    const { IconProps: PrevIconProps, ...PrevIconButtonProps } = PrevButtonProps
    const { IconProps: NextIconProps, ...NextIconButtonProps } = NextButtonProps

    return (
      <>
        <DsIconButton
          className="swiper-button-prev"
          {...PrevIconButtonProps}
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 'var(--ds-spacing-mild)',
            p: 'var(--ds-spacing-quickFreeze)',
            borderRadius: 'var(--ds-radius-bitterCold)',
            backgroundColor: 'var(--ds-colour-surfaceSecondary)',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
            },
            ...PrevIconButtonProps?.sx
          }}
        >
          <DsRemixIcon className="ri-arrow-left-s-line" {...PrevIconProps} />
        </DsIconButton>
        <DsIconButton
          className="swiper-button-next"
          {...NextIconButtonProps}
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: 'var(--ds-spacing-mild)',
            p: 'var(--ds-spacing-quickFreeze)',
            borderRadius: 'var(--ds-radius-bitterCold)',
            backgroundColor: 'var(--ds-colour-surfaceSecondary)',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'var(--ds-colour-stateSelectedPrimaryHover)'
            },
            ...NextIconButtonProps?.sx
          }}
        >
          <DsRemixIcon className="ri-arrow-right-s-line" {...NextIconProps} />
        </DsIconButton>
      </>
    )
  }
}
