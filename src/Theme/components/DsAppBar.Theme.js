const DsAppBarTheme = {
  MuiListItemButton: {
    variants: [
      {
        props: { 'ds-variant': 'mini-drawer' },
        style: {
          paddingLeft: 'var(--ds-spacing-zero)'
        }
      }
    ]
  },
  MuiListItemIcon: {
    variants: [
      {
        props: { 'ds-variant': 'mini-drawer' },
        style: {
          width: 'var(--ds-rules-drawerMiniWidth)'
        }
      }
    ]
  },
  MuiAppBar: {
    variants: [
      {
        props: { 'ds-variant': 'mini-drawer' },
        style: ({ ownerState, theme }) => {
          return {
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen
            }),
            ...(ownerState.open && {
              marginLeft: 'var(--ds-rules-drawerWidth)',
              width: 'calc(100% - var(--ds-rules-drawerWidth))',
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
              })
            })
          }
        }
      }
    ],
    defaultProps: {
      color: 'surface', // TODO
      enableColorOnDark: true,
      elevation: -1
    }
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        padding: 'var(--ds-spacing-bitterCold)',
        minHeight: 'var(--ds-rules-appBarMobileMinHeight)',
        '@media (min-width: 0px)': {
          padding: 'var(--ds-spacing-bitterCold)',
          minHeight: 'var(--ds-rules-appBarMobileMinHeight)'
        }
      }
    }
  },
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
        backgroundColor: 'var(--ds-color-surfaceBackground)',
        boxShadow: 'var(--ds-elevation--1)' // TODO
      },
      paperAnchorBottom: {
        backgroundColor: 'transparent'
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

export default DsAppBarTheme
