const DsInputAdornmentTheme = {
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: 'var(--ds-color-iconDefault)',
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

export default DsInputAdornmentTheme
