import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'

import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import DsRemixIcon from './DsRemixIcon'

const DRAWER_WIDTH = 240

export default class DsSideNav extends PureComponent {
  static propTypes = {
    navLinks: PropTypes.arrayOf(
      PropTypes.shape({
        Icon: PropTypes.elementType,
        title: PropTypes.string
      })
    ),
    open: PropTypes.bool,
    onDrawerclose: PropTypes.func,
    onNavlinkClick: PropTypes.func
  }

  static defaultProps = {
    navLinks: [],
    open: false,
    onDrawerclose: () => undefined,
    onNavlinkClick: () => undefined
  }

  renderNavLinks() {
    const { navLinks, open, onNavlinkClick } = this.props

    return navLinks.map((navLink, index) => {
      const { Icon, title } = navLink

      return (
        <ListItem
          key={title}
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => {
            onNavlinkClick(navLink)
          }}
        >
          <ListItemButton
            ds-variant="mini-drawer"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center'
            }}
          >
            <ListItemIcon
              ds-variant="mini-drawer"
              sx={{
                minWidth: 0,
                justifyContent: 'center'
              }}
            >
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      )
    })
  }

  getDrawer() {
    const {
      open,
      onDrawerclose,
      navLinks,
      onNavlinkClick,
      ...drawerProps
    } = this.props

    return (
      <Drawer {...drawerProps} open={open} onClose={onDrawerclose}>
        <Toolbar
          sx={{
            width: DRAWER_WIDTH,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <IconButton variant="app-bar" onClick={onDrawerclose}>
            <DsRemixIcon className="ri-arrow-left-s-line" />
          </IconButton>
        </Toolbar>
        <List sx={{ width: DRAWER_WIDTH }}>
          {this.renderNavLinks()}
        </List>
      </Drawer>
    )
  }

  render() {
    return this.getDrawer()
  }
}
