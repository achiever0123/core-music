import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHeadphones,
  cilAlbum,
  cilUser,
  cilBell,
  cilMusicNote,
  cilHome,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Songs',
    to: '/songs',
    icon: <CIcon icon={cilMusicNote} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Albums',
    to: '/albums',
    icon: <CIcon icon={cilAlbum} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Artists',
        to: '/artists',
      },
      {
        component: CNavItem,
        name: 'Listeners',
        to: '/listeners',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Notifications',
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Support',
    to: '/support',
    icon: <CIcon icon={cilHeadphones} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Starred',
        to: '/starred',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
