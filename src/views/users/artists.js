import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CProgress,
  CProgressBar,
  CAvatar,
} from '@coreui/react'
import {
  cilMusicNote,
  cilArrowTop,
  cilArrowBottom,
  cilFeaturedPlaylist,
  cilOptions,
  cilChartLine,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CChartLine } from '@coreui/react-chartjs'

import avatar1 from 'src/assets/images/demi.png'
import avatar2 from 'src/assets/images/avatars/2.jpg'
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
      status: false,
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
      status: false,
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
      status: false,
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
      avatar: avatar1,
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
      avatar: avatar1,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: avatar1,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: avatar1,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: avatar1,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: avatar1,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
    {
      avatar: avatar1,
      title: 'Tomisin Olatunji donated N2m to Traylor Swift',
      gateway: '[via Paypal]',
      date: '14 April, 2021',
    },
  ]

  const FollowedList = [
    {
      avatar: avatar1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'up',
    },
    {
      avatar: avatar1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'down',
    },
    {
      avatar: avatar1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'right',
    },
    {
      avatar: avatar1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'down',
    },
    {
      avatar: avatar1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'up',
    },
    {
      avatar: avatar1,
      name: 'Nicki Minaji',
      gateway: 'HipHop/Rap',
      followers: '1,987,353',
      status: 'down',
    },
    {
      avatar: avatar1,
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
                    <img src={avatar1} className="albums-image" />
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
                    <CAvatar src={avatar1} size="lg" />
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
                    <img src={avatar1} className="artists-image" />
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
