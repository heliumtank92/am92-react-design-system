import { PureComponent } from 'react'
import { DsBox } from '../DsBox'
import { DsStack } from '../DsStack'
import {
  DsContentSliderProps,
  DsContentSliderState
} from './DsContentSlider.Types'

export class DsContentSlider extends PureComponent<
  DsContentSliderProps,
  DsContentSliderState
> {
  constructor(props: DsContentSliderProps) {
    super(props)

    const state: DsContentSliderState = {
      active: props.activeStep
    }

    this.state = state
  }

  renderStep(index: number) {
    const { active } = this.state
    const isActiveStep = index === active

    if (isActiveStep) {
      const isTimed = this.props['ds-variant'] === 'timed'

      if (isTimed) {
        return (
          <DsBox
            sx={{
              width: '20px',
              height: '6px',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <DsBox
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--ds-colour-stateSelectedPrimaryPressed)',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <DsBox
              sx={{
                width: '60%',
                height: '100%',
                backgroundColor: 'var(--ds-colour-actionSecondary)',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
          </DsBox>
        )
      }

      return (
        <DsBox
          sx={{
            width: '16px',
            height: '6px',
            borderRadius: '4px',
            backgroundColor: 'var(--ds-colour-actionSecondary)'
          }}
        />
      )
    }

    return (
      <DsBox
        sx={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-colour-stateDisabledSurface)'
        }}
      />
    )
  }

  renderSteps() {
    const { steps } = this.props
    const indicators: JSX.Element[] = []

    for (let index = 0; index < steps; index++) {
      const indicator: JSX.Element = this.renderStep(index)
      indicators.push(indicator)
    }

    return indicators
  }

  render() {
    const { steps } = this.props
    return (
      <DsStack direction="row" spacing="var(--ds-spacing-quickFreeze)">
        {this.renderSteps()}
      </DsStack>
    )
  }
}
