import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CAvatar, CNavItem, CNavLink } from '@coreui/react'

import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import logo from 'src/assets/images/logo.png'
import navigation from '../_nav'
import { cilAccountLogout } from '@coreui/icons'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <div className="napollo-logo">
          <CAvatar src={logo} size="lg" />
        </div>
        <h3>Napollo</h3>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
        <div className="sidebar-footer">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilAccountLogout} size="lg" />
              Log out
            </CNavLink>
          </CNavItem>
        </div>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
