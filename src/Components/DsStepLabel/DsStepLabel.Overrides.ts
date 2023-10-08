import { CSSInterpolation } from '@mui/system'

export const DsStepLabelOverrides = {
  MuiStepLabel: {
    styleOverrides: {
      root: {
        paddingLeft: 'var(--ds-spacing-bitterCold)',
        paddingRight: 'var(--ds-spacing-bitterCold)',
        paddingTop: 'var(--ds-spacing-zero)',
        paddingBottom: 'var(--ds-spacing-zero)'
      } as CSSInterpolation,
      label: {
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        textTransform: 'none',
        color: 'var(--ds-colour-typoPrimary)',
        marginLeft: 'var(--ds-spacing-mild)',
        marginRight: 'var(--ds-spacing-mild)',
        '&.Mui-disabled': {
          color: 'var(--ds-colour-typoPrimary)'
        }
      } as CSSInterpolation,
      iconContainer: {
        fontSize: 'var(--ds-typo-fontSizeMild)',
        padding: 'var(--ds-spacing-zero)',
        margin: 'var(--ds-spacing-zero)',
        marginTop: 'var(--ds-spacing-deepFreeze)',
        marginBottom: 'var(--ds-spacing-deepFreeze)',
        '&.Mui-disabled': {
          marginTop: 'var(--ds-spacing-quickFreeze)',
          marginBottom: 'var(--ds-spacing-quickFreeze)',

          fontWeight: 'var(--ds-typo-supportRegularMetadata-fontWeight)',
          fontSize: 'var(--ds-typo-supportRegularMetadata-fontSize)',
          lineHeight: 'var(--ds-typo-supportRegularMetadata-lineHeight)',
          letterSpacing: 'var(--ds-typo-supportRegularMetadata-letterSpacing)',
          textTransform: 'uppercase',
          color: 'var(--ds-colour-typoTertiary)',
          height: '20px',
          width: '20px',
          marginLeft: 'var(--ds-spacing-deepFreeze)',
          padding: 'var(--ds-spacing-deepFreeze)',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'var(--ds-colour-stateUnselectedDefault)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      } as CSSInterpolation
    }
  }
}
