const DsDrawerTheme = {
  MuiDrawer: {
    variants: [
      {
        props: { 'ds-variant': 'mini-drawer' },
        style: ({ ownerState, theme }) => {
          return {
            zIndex: theme.zIndex.appBar - 1,
            width: 'var(--ds-rules-drawerWidth)',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(ownerState.open && {
              width: 'var(--ds-rules-drawerWidth)',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
              }),
              overflowX: 'hidden',
              '& .MuiDrawer-paper': {
                width: 'var(--ds-rules-drawerWidth)',
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen
                }),
                overflowX: 'hidden'
              }
            }),
            ...(!ownerState.open && {
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              }),
              overflowX: 'hidden',
              width: 0,
              [theme.breakpoints.up('sm')]: {
                width: 'var(--ds-rules-drawerMiniWidth)'
              },
              '& .MuiDrawer-paper': {
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen
                }),
                overflowX: 'hidden',
                width: 0,
                [theme.breakpoints.up('sm')]: {
                  width: 'var(--ds-rules-drawerMiniWidth)'
                }
              }
            })
          }
        }
      }
    ],
    styleOverrides: {
      paper: {
        background: 'var(--ds-color-surfacePrimary)',
        boxShadow: 'var(--ds-elevation--1)' // TODO
      },
      paperAnchorBottom: {
        // For Bottom Sheets
        background: 'transparent'
      },
      paperAnchorRight: {
        paddingTop: 'var(--ds-spacing-tepid)',
        borderTopLeftRadius: '16px',
        width: '80%',
        backgroundColor: 'var(--ds-color-surfacePrimary)',
        backgroundImage: 'none'
      }
    }
  }
}

export default DsDrawerTheme
