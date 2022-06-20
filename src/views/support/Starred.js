import { React, useState } from 'react'

import { CRow, CListGroup, CListGroupItem, CAvatar, CFormCheck } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilStar, cilFilter } from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar2, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar3, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar4, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar6, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar4, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
  {
    avatar: { src: avatar6, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      title: 'Issue with following artists',
      content: 'I have been have problems with following artists of my ...',
      registered: 'Jan 1, 2021',
    },
  },
]

const Support = () => {
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [eachSubscribed, setEachSubscribed] = useState(false)
  const handleChange = () => {
    setIsSubscribed((current) => !current)
    setEachSubscribed(isSubscribed)
  }
  return (
    <>
      <CRow className="starred">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <CFormCheck
              id="flexCheckDefault"
              label="Select"
              className="starred-header"
              value={isSubscribed}
              onChange={handleChange}
            />
          </div>
          <div className="notification-header-right">
            <a href="/notifications">
              <CIcon icon={cilFilter} /> Filter
            </a>
          </div>
        </div>
        <hr className="mt-3 mb-3" />
        {tableExample.map((item, index) => (
          <CListGroup className="mb-2" key={index} layout={'horizontal-md'}>
            <CListGroupItem>
              <CFormCheck id="flexCheckDefault" value={eachSubscribed} />
            </CListGroupItem>
            <CListGroupItem>
              <CAvatar size="lg" src={item.avatar.src} />
            </CListGroupItem>
            <CListGroupItem className="list-title">{item.user.name}</CListGroupItem>
            <CListGroupItem>{item.user.title}</CListGroupItem>
            <CListGroupItem>{item.user.content}</CListGroupItem>
            <CListGroupItem>
              <CIcon icon={cilStar} size="xl" />
            </CListGroupItem>
            <CListGroupItem>{item.user.registered}</CListGroupItem>
          </CListGroup>
        ))}
      </CRow>
    </>
  )
}

export default Support
