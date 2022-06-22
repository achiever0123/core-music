import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CAvatar,
  CNavItem,
  CNavLink,
  CRow,
  CCol,
} from '@coreui/react'

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
        {/* <div className="d-md-none d-lg-none d-xl-none p-4 mt-4 sidebar-top">
          <CRow>
            <CCol sm={5} xs={5} className="music-group">
              <div className="music-artist">AJ</div>
            </CCol>
            <CCol sm={7} xs={7}>
              <h5>Artist Test1</h5>
              <label>@rockband</label>
              <p>Ontario, Canada</p>
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol xs={6} sm={6}>
              <span className="span-follow">1&nbsp;&nbsp;</span>
              <span>Followers</span>
            </CCol>
            <CCol xs={6} sm={6}>
              <span className="span-follow">1&nbsp;&nbsp;</span>
              <span>Following</span>
            </CCol>
          </CRow>
        </div> */}
        {/* <hr className="d-md-none d-lg-none d-xl-none"></hr> */}
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
        <div className="sidebar-footer">
          <CNavItem>
            <CNavLink href="/login">
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
