import { React, useState } from 'react'

import { CRow, CListGroup, CListGroupItem, CAvatar, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilStar, cilFilter } from '@coreui/icons'

import avatar1 from 'src/assets/images/artists/1.png'
import avatar2 from 'src/assets/images/artists/2.png'
import avatar3 from 'src/assets/images/artists/3.png'
import avatar4 from 'src/assets/images/artists/4.png'
import avatar5 from 'src/assets/images/artists/5.png'
import avatar6 from 'src/assets/images/artists/6.png'
import avatar7 from 'src/assets/images/artists/7.png'
import avatar8 from 'src/assets/images/artists/8.png'
import avatar9 from 'src/assets/images/artists/9.png'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar2, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar3, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar4, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar6, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar7, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar8, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
  {
    avatar: { src: avatar9, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
    },
  },
]

const Discovered_songs = () => {
  return (
    <>
      <CRow className="starred">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="d-song-title">
            <p>Recently Discovered Songs</p>
          </div>
          <div className="notification-header-right">
            <a href="/notifications">View all</a>
          </div>
        </div>
        <hr className="mb-3" />
        {tableExample.map((item, index) => (
          <CListGroup
            className="mb-2 d-flex justify-content-center"
            key={index}
            layout={'horizontal-md'}
          >
            <CListGroupItem className="d-song-list-no">
              <p>{index + 1}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-center">
              <img src={item.avatar.src} alt="d-song" className="d-song-list-img"></img>
            </CListGroupItem>
            <CListGroupItem className="list-title">{item.user.name}</CListGroupItem>
            <CListGroupItem>{item.user.title}</CListGroupItem>
            <CListGroupItem>
              <CButton color="warning" variant="outline">
                Accept
              </CButton>
            </CListGroupItem>
            <CListGroupItem>
              <CButton color="info" variant="outline">
                Deny
              </CButton>
            </CListGroupItem>
            <CListGroupItem>:</CListGroupItem>
          </CListGroup>
        ))}
      </CRow>
    </>
  )
}

export default Discovered_songs
