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
} from '@coreui/react'
import { cilMusicNote, cilArrowTop, cilArrowBottom, cilFeaturedPlaylist } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Albums = () => {
  const hotsongs = [
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      peak: '1',
      lastweek: '3',
      weeksonnapollo: '6',
      duration: '3:26',
      state: 'up',
    },
    {
      song: 'Unstoppable',
      artist: 'Masked Wolf',
      album: 'After Hours',
      peak: '2',
      lastweek: '3',
      weeksonnapollo: '3',
      duration: '1:53',
      state: 'up',
    },
    {
      song: 'Lorem Upson',
      artist: 'Michael Jodan',
      album: 'After Hours',
      peak: '2',
      lastweek: '4',
      weeksonnapollo: '7',
      duration: '5:16',
      state: 'down',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      peak: '1',
      lastweek: '3',
      weeksonnapollo: '6',
      duration: '3:26',
      state: 'up',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      peak: '1',
      lastweek: '3',
      weeksonnapollo: '6',
      duration: '3:26',
      state: 'down',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      peak: '1',
      lastweek: '3',
      weeksonnapollo: '6',
      duration: '3:26',
      state: 'up',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      peak: '1',
      lastweek: '3',
      weeksonnapollo: '6',
      duration: '3:26',
      state: 'up',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      peak: '1',
      lastweek: '3',
      weeksonnapollo: '6',
      duration: '3:26',
      state: 'down',
    },
  ]
  const newsongs = [
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
    {
      song: 'Save your years',
      artist: 'The Weekend',
      album: 'After Hours',
      duration: '3:26',
    },
  ]
  const playlists = [
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
    {
      name: 'Save your years',
      owner: 'The Weekend',
      nooffollowers: '600,000',
      duration: '3:26',
    },
  ]
  return (
    <CRow className="mb-4">
      <CCol xs={12} className="mt-4">
        <CCard className="pt-4">
          <CCardHeader>
            <h5>Hot 10 Songs</h5>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0" hover responsive borderless>
              <CTableHead className="mb-4">
                <CTableRow>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell>Song</CTableHeaderCell>
                  <CTableHeaderCell>Artist</CTableHeaderCell>
                  <CTableHeaderCell>Album</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Peak</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Last Week</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Weeks on Napollo</CTableHeaderCell>
                  <CTableHeaderCell>Duration</CTableHeaderCell>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {hotsongs.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CIcon size="lg" icon={cilMusicNote} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.song}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.artist}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.album}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div>{item.peak}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div>{item.lastweek}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div>{item.weeksonnapollo}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.duration}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      {item.state === 'up' ? (
                        <CIcon size="lg" icon={cilArrowTop} style={{ color: '#3ef8d3' }} />
                      ) : (
                        <CIcon size="lg" icon={cilArrowBottom} style={{ color: '#e90909' }} />
                      )}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} className="mt-4">
        <CCard className="pt-4">
          <CCardHeader>
            <h5>New Songs</h5>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0" hover responsive borderless>
              <CTableHead className="mb-4">
                <CTableRow>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell>Song</CTableHeaderCell>
                  <CTableHeaderCell>Artist</CTableHeaderCell>
                  <CTableHeaderCell>Album</CTableHeaderCell>
                  <CTableHeaderCell>Duration</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {newsongs.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CIcon size="lg" icon={cilMusicNote} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.song}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.artist}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.album}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.duration}</div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} className="mt-4">
        <CCard className="pt-4">
          <CCardHeader>
            <h5>New Songs</h5>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0" hover responsive borderless>
              <CTableHead className="mb-4">
                <CTableRow>
                  <CTableHeaderCell className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Owner</CTableHeaderCell>
                  <CTableHeaderCell>No of Followers</CTableHeaderCell>
                  <CTableHeaderCell>Duration</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {playlists.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CIcon size="lg" icon={cilFeaturedPlaylist} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.owner}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.nooffollowers}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.duration}</div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Albums
