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

const Listeners = () => {
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

  const donators = [
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
    {
      name: 'Tomisin Olatunji',
      total_donation: 'N23,000,000',
      date: '10 Aprill, 2021',
    },
  ]

  return (
    <>
      <ArtistsDropdown />
      <CRow className="g-3">
        <CCol xs={12} md={6} sm={6}>
          <CCard className="mb-4">
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
          <CCard className="pt-4 mb-4">
            <CCardHeader>
              <h5>Donators</h5>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 songs-table" hover responsive borderless>
                <CTableHead className="mb-4">
                  <CTableRow>
                    <CTableHeaderCell className="th-start"></CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Total Donation</CTableHeaderCell>
                    <CTableHeaderCell className="th-end">Latest Date</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {donators.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CIcon size="lg" icon={cilMusicNote} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.total_donation}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.date}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} sm={6}>
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
        </CCol>
      </CRow>
    </>
  )
}

export default Listeners
