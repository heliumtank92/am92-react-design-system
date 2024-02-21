import * as React from 'react'

import { DsCarouselPaginationProps } from '../DsCarousel.Types'
import { DsBox } from '../../DsBox'

export default class DsCarouselPagination extends React.PureComponent<DsCarouselPaginationProps> {
  paginationRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    this.handleFirstTransition()
  }

  handleFirstTransition = () => {
    const firstActiveBullet =
      this.paginationRef.current?.getElementsByClassName(
        'swiper-pagination-bullet-active'
      )[0]

    if (firstActiveBullet) {
      firstActiveBullet.classList.remove('swiper-pagination-bullet-active')
      setTimeout(() => {
        firstActiveBullet.classList.add('swiper-pagination-bullet-active')
      }, 0)
    }
  }

  render() {
    const {
      isEnabled,
      isAutoplayEnabled,
      PaginationSettings,
      AutoplaySettings,
      PaginationProps
    } = this.props
    if (!isEnabled) {
      return false
    }

    let className = 'swiper-pagination'
    let transitionSpeed = 0

    if (isAutoplayEnabled) {
      className = 'swiper-pagination rds-pilled'
      transitionSpeed =
        (typeof AutoplaySettings !== 'boolean' && AutoplaySettings?.delay) ||
        3000
    }
    return (
      <DsBox
        ref={this.paginationRef}
        className={className}
        {...PaginationProps}
        sx={{
          position: 'absolute',
          textAlign: 'center',
          transition: '300ms opacity',
          transform: 'translate3d(0, 0, 0)',
          zIndex: 1,
          '&.swiper-pagination-hidden': {
            opacity: 0
          },
          '&.swiper-pagination-disabled': {
            '&.swiper-pagination-disabled': {
              display: 'none !important'
            }
          },
          '&.swiper-pagination-bullets': {
            '> .swiper-pagination-bullet': {
              width: '6px',
              height: '6px',
              display: 'inline-block',
              borderRadius: 'var(--ds-radius-bitterCold)',
              opacity: 1,
              mx: 'var(--ds-spacing-deepFreeze)',
              background:
                'linear-gradient(to right, var(--ds-colour-actionSecondary), var(--ds-colour-actionSecondary)) no-repeat, linear-gradient(to right, var(--ds-colour-stateUnselectedDefault), var(--ds-colour-stateUnselectedDefault)) no-repeat',
              backgroundSize: '0% 100%, 100% 100%',
              backgroundPosition: '0 0, 0 0',
              '&:only-child': {
                display: 'none !important'
              },
              '&.swiper-pagination-bullet-active': {
                width: '16px',
                background: 'var(--ds-colour-actionSecondary)',
                opacity: 1
              }
            }
          },
          '&.swiper-pagination-bullets.rds-pilled': {
            '> .swiper-pagination-bullet': {
              '&.swiper-pagination-bullet-active': {
                width: '20px',
                background:
                  'linear-gradient(to right, var(--ds-colour-actionSecondary), var(--ds-colour-actionSecondary)) no-repeat, linear-gradient(to right, var(--ds-colour-stateUnselectedDefault), var(--ds-colour-stateUnselectedDefault)) no-repeat',
                borderRadius: 'var(--ds-radius-bitterCold)',
                backgroundSize: '100% 100%, 100% 100%',
                backgroundPosition: '0 0 , 100% 0',
                transition: `width 0.5s, background-size ${
                  transitionSpeed / 1000
                }s`
              }
            }
          },
          '&.swiper-pagination-clickable': {
            '> .swiper-pagination-bullet': {
              cursor: 'pointer'
            }
          },
          '&.swiper-pagination-bullets-dynamic': {
            overflow: 'hidden',
            fontSize: 0,
            '> .swiper-pagination-bullet': {
              transform: 'scale(0.33)',
              position: 'relative',
              '&.swiper-pagination-bullet-active': {
                transform: 'scale(1)'
              },
              '&.swiper-pagination-bullet-active-main': {
                transform: 'scale(1)'
              },
              '&.swiper-pagination-bullet-active-prev': {
                transform: 'scale(0.66)'
              },
              '&.swiper-pagination-bullet-active-prev-prev': {
                transform: 'scale(0.33)'
              },
              '&.swiper-pagination-bullet-active-next': {
                transform: 'scale(0.66)'
              },
              '&.swiper-pagination-bullet-active-next-next': {
                transform: 'scale(0.33)'
              }
            }
          },
          '&.swiper-pagination-horizontal.swiper-pagination-bullets': {
            bottom:
              PaginationSettings?.mode === 'internal'
                ? 'var(--ds-spacing-frostbite)'
                : 'var(--ds-spacing-zero)',
            top: 'auto',
            left: 0,
            width: '100%',
            '&.swiper-pagination-bullets-dynamic': {
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              '> .swiper-pagination-bullet': {
                transition: `200ms transform, 200ms left`,
                '&.swiper-pagination-bullet-active': {
                  transition: `width 0.5s, background-size ${
                    transitionSpeed / 1000
                  }s, 200ms transform, 200ms left`
                }
              }
            }
          },
          ...PaginationProps?.sx
        }}
      />
    )
  }
}
