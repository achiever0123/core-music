import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CProgress,
  CProgressBar,
  CAvatar,
} from '@coreui/react'
import { cilArrowTop, cilArrowBottom, cilOptions } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar1 from 'src/assets/images/artists/1.png'
import avatar2 from 'src/assets/images/artists/2.png'
import avatar3 from 'src/assets/images/artists/3.png'
import avatar4 from 'src/assets/images/artists/4.png'
import avatar5 from 'src/assets/images/artists/5.png'
import avatar6 from 'src/assets/images/artists/6.png'
import avatar7 from 'src/assets/images/artists/7.png'
import avatar8 from 'src/assets/images/artists/8.png'
import avatar9 from 'src/assets/images/artists/9.png'
import avatar10 from 'src/assets/images/artists/10.png'

import paypal from 'src/assets/images/payment/paypal.png'
import gpay from 'src/assets/images/payment/gpay.png'
import master from 'src/assets/images/payment/master.png'
import skrill from 'src/assets/images/payment/skrill.png'

import artist1 from 'src/assets/images/avatars/1.jpg'
import artist2 from 'src/assets/images/avatars/2.jpg'
import artist3 from 'src/assets/images/avatars/3.jpg'
import artist4 from 'src/assets/images/avatars/4.jpg'
import artist5 from 'src/assets/images/avatars/5.jpg'
import artist6 from 'src/assets/images/avatars/6.jpg'
import artist7 from 'src/assets/images/avatars/7.jpg'

import ArtistsDropdown from '../widgets/ArtistsDropdown'

const Artists = () => {
  const albumsList = [
    {
      status: true,
      avatar: avatar1,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: true,
      avatar: avatar2,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: false,
      avatar: avatar3,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: true,
      avatar: avatar4,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: false,
      avatar: avatar5,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: true,
      avatar: avatar6,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: true,
      avatar: avatar7,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: false,
      avatar: avatar8,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: true,
      avatar: avatar9,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
    {
      status: true,
      avatar: avatar10,
      title: 'BE',
      content: 'BTS',
      user: {
        week: '1',
        peak: '1',
        weeks: '20',
      },
    },
  ]

  const locationsList = [
    {
      location: 'New York',
      progress: '15',
    },
    {
      location: 'Atlanta',
      progress: '15',
    },
    {
      location: 'Chicago',
      progress: '15',
    },
    {
      location: 'New York',
      progress: '15',
    },
    {
      location: 'Houston',
      progress: '15',
    },
    {
      location: 'Atlanta',
      progress: '15',
    },
    {
      location: 'Phoenix',
      progress: '15',
    },
  ]

  const ageList = [
    {
      location: '13-17',
      progress: '15',
    },
    {
      location: '18-24',
      progress: '15',
    },
    {
      location: '25-34',
      progress: '15',
    },
    {
      location: '35-44',
      progress: '15',
    },
    {
      location: '45-54',
      progress: '15',
    },
    {
      location: '55-64',
      progress: '15',
    },
    {
      location: '65+',
      progress: '15',
    },
  ]

  const DonationsLog = [
    {
      avatar: paypal,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: master,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: skrill,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: gpay,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: master,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: skrill,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
  ]

  const FollowedList = [
    {
      avatar: artist1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'up',
    },
    {
      avatar: artist2,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'down',
    },
    {
      avatar: artist3,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'right',
    },
    {
      avatar: artist4,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'down',
    },
    {
      avatar: artist5,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'up',
    },
    {
      avatar: artist6,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'down',
    },
    {
      avatar: artist7,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'right',
    },
  ]

  return (
    <>
      <ArtistsDropdown />
      <CRow className="g-3">
        <CCol xs={12} md={6} sm={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <div>Top 10 Albums</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody className="p-4">
              {albumsList.map((item, index) => (
                <CRow key={index} className="top-albums-list-item-1 p-2 m-3">
                  <CCol xs={2} md={2} sm={2} className="list-1 text-center">
                    <p>{index + 1}</p>
                    {item.status === true ? (
                      <CIcon size="sm" icon={cilArrowTop} style={{ color: '#3ef8d3' }} />
                    ) : (
                      <CIcon size="sm" icon={cilArrowBottom} style={{ color: '#e90909' }} />
                    )}
                  </CCol>
                  <CCol xs={2} md={2} sm={2} className="p-0 list-2">
                    <img alt="artist" src={item.avatar} className="albums-image" />
                  </CCol>
                  <CCol xs={7} md={7} sm={7} className="list-3">
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                    <p className="list-3-item">
                      <div>
                        <span> {item.user.week} </span>
                        <label className="pl-2"> Last Week </label>
                      </div>
                      <div>
                        <span> {item.user.peak} </span>
                        <label className="pl-2"> Peak </label>
                      </div>
                      <div>
                        <span> {item.user.weeks} </span>
                        <label className="pl-2"> Weeks </label>
                      </div>
                    </p>
                  </CCol>
                </CRow>
              ))}
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <div>Top Locations</div>
              <div>
                <span className="m-2"> Cities </span>
                <span> Age </span>
              </div>
            </CCardHeader>
            <CCardBody className="p-4">
              {locationsList.map((item, index) => (
                <CRow key={index} className="mb-3">
                  <CCol xs={3} md={3} sm={3}>
                    {item.location}
                  </CCol>
                  <CCol xs={7} md={7} sm={7}>
                    <CProgress className="mb-3 toplocation-progress">
                      <CProgressBar
                        color="warning"
                        value={25}
                        className="toplocation-progressbar"
                      />
                    </CProgress>
                  </CCol>
                  <CCol xs={2} md={2} sm={2}>
                    {item.progress}%
                  </CCol>
                </CRow>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} sm={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <div>Donations Log</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody className="p-4">
              {DonationsLog.map((item, index) => (
                <CRow key={index} className="mb-2 donations-log">
                  <CCol xs={3} md={3} sm={3} className="avatar-container text-center">
                    <CAvatar src={item.avatar} size="lg" />
                  </CCol>
                  <CCol xs={9} md={9} sm={9}>
                    <p className="log-1">{item.title}</p>
                    <p className="log-2">{item.gateway}</p>
                    <p className="log-3">{item.date}</p>
                  </CCol>
                </CRow>
              ))}
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <div>Most Followed Artists</div>
            </CCardHeader>
            <CCardBody className="p-4">
              {FollowedList.map((item, index) => (
                <CRow key={index} className="mb-4 most-followed-artists">
                  <CCol xs={2} md={2} sm={2} className="avatar-container text-center">
                    <img alt="artist" src={item.avatar} className="artists-image" />
                  </CCol>
                  <CCol xs={4} md={4} sm={4}>
                    <p className="follow-1">{item.name}</p>
                    <p className="follow-2">{item.gateway}</p>
                  </CCol>
                  <CCol xs={5} md={5} sm={5}>
                    <p className="followers">{item.followers} Followers</p>
                  </CCol>
                  <CCol xs={1} md={1} sm={1}>
                    {item.status === 'up' ? (
                      <CIcon size="md" icon={cilArrowTop} style={{ color: '#3ef8d3' }} />
                    ) : (
                      <CIcon size="md" icon={cilArrowBottom} style={{ color: '#e90909' }} />
                    )}
                  </CCol>
                </CRow>
              ))}
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <div>Age</div>
              <div>
                <span className="m-2"> All </span>
                <span className="m-2"> Male </span>
                <span> Female </span>
              </div>
            </CCardHeader>
            <CCardBody className="p-4">
              {ageList.map((item, index) => (
                <CRow key={index} className="mb-3">
                  <CCol xs={3} md={3} sm={3}>
                    {item.location}
                  </CCol>
                  <CCol xs={7} md={7} sm={7}>
                    <CProgress className="mb-3 toplocation-progress">
                      <CProgressBar
                        color="warning"
                        value={25}
                        className="toplocation-progressbar"
                      />
                    </CProgress>
                  </CCol>
                  <CCol xs={2} md={2} sm={2}>
                    {item.progress}%
                  </CCol>
                </CRow>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Artists
