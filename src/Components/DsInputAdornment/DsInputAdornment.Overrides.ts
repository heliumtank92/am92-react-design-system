export const DsInputAdornmentOverrides = {
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: 'var(--ds-colour-iconDefault)',
        '& .MuiSvgIcon-root': {
          cursor: 'pointer'
        }
      },
      positionStart: {
        marginRight: 'var(--ds-spacing-zero)'
      },
      positionEnd: {
        marginLeft: 'var(--ds-spacing-zero)'
      }
    }
  }
}
