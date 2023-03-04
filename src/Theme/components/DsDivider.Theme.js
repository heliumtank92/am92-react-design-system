const DsDividerTheme = {
  MuiDivider: {
    defaultProps: {
      'ds-size': 'M'
    },
    styleOverrides: {
      root: {
        borderColor: 'var(--ds-color-strokeDefault)'
      },
      light: {
        borderColor: 'var(--ds-color-strokeDisabled)'
      }
    },
    variants: [
      {
        props: { 'ds-size': 'M' },
        style: {
          borderWidth: '0.5px'
        }
      },
      {
        props: { 'ds-size': 'L' },
        style: {
          borderWidth: '6px'
        }
      }
    ]
  }
}

export default DsDividerTheme
