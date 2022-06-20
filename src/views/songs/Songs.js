import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsE,
  CProgress,
  CProgressBar,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import {
  cilMusicNote,
  cilArrowTop,
  cilArrowBottom,
  cilFeaturedPlaylist,
  cilOptions,
  cilChartLine,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Songs = () => {
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
    <>
      <CRow className="mb-4 songs-card g-3">
        <CCol xs={12} md={4} sm={4}>
          <CCard>
            <CCardHeader>
              <div>Top Song</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="card-small-part">
                <p className="small-part-span">Driver License</p>
                <span>Olivia Rodrigo</span>
              </div>
              <CRow className="top-song-card">
                <CCol xs={6} md={6}>
                  <p>Streams</p>
                  <div>657,221</div>
                  <CChartLine
                    style={{ height: '40px', paddingRight: '0.2rem' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: '#546ac3',
                          borderWidth: 2,
                          data: [41, 78, 51, 66, 61, 42, 72, 97, 83, 84, 78, 88, 67, 45, 47],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                </CCol>
                <CCol xs={6} md={6}>
                  <p>Downloads</p>
                  <div>34,670</div>
                  <CChartLine
                    style={{ height: '40px', paddingRight: '0.2rem' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: '#e04f58',
                          borderWidth: 2,
                          data: [41, 78, 51, 66, 61, 42, 72, 97, 83, 84, 78, 88, 67, 45, 47],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={4} sm={4}>
          <CCard>
            <CCardHeader>
              <div>Trending</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="trending-card-part-1">
                <span className="tr-span-1">34,670</span>
                <span className="tr-span-2"> stream this week</span>
                <span className="tr-span-3">
                  <CIcon icon={cilChartLine} size="xl" />
                </span>
              </div>
              <div className="trending-card-part-1">
                <span className="tr-span-1">3,408</span>
                <span className="tr-span-2"> downloads this week</span>
                <span className="tr-span-3">
                  <CIcon icon={cilChartLine} size="xl" />
                </span>
              </div>
              <div className="card-small-part-1">
                <p className="small-part-span-1">Leave The Door Open</p>
                <span>Silk Sonic ( Bruno Mars & Anderson .Paak) </span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={4} sm={4}>
          <CCard>
            <CCardHeader>
              <div>Top Genre</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="topgrnre-card-part1">Hip-Hop/ Rap</div>
              <CRow>
                <CCol sm={9}>
                  <CProgress className="mb-3 topgenre-progress">
                    <CProgressBar color="warning" value={25} className="topgenre-progressbar" />
                  </CProgress>
                </CCol>
                <CCol sm={3}>
                  <span>25.6%</span>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mb-4">
        <CCol xs={12} className="mt-4">
          <CCard className="pt-4">
            <CCardHeader>
              <h5>Hot 10 Songs</h5>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 songs-table" hover responsive borderless>
                <CTableHead className="mb-4">
                  <CTableRow>
                    <CTableHeaderCell className="text-center th-start"></CTableHeaderCell>
                    <CTableHeaderCell>Song</CTableHeaderCell>
                    <CTableHeaderCell>Artist</CTableHeaderCell>
                    <CTableHeaderCell>Album</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Peak</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Last Week</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Weeks on Napollo</CTableHeaderCell>
                    <CTableHeaderCell>Duration</CTableHeaderCell>
                    <CTableHeaderCell className="text-center th-end"></CTableHeaderCell>
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
              <CTable align="middle" className="mb-0 songs-table" hover responsive borderless>
                <CTableHead className="mb-4">
                  <CTableRow>
                    <CTableHeaderCell className="text-center th-start"></CTableHeaderCell>
                    <CTableHeaderCell>Song</CTableHeaderCell>
                    <CTableHeaderCell>Artist</CTableHeaderCell>
                    <CTableHeaderCell>Album</CTableHeaderCell>
                    <CTableHeaderCell className="th-end">Duration</CTableHeaderCell>
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
              <h5>Play Lists</h5>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 songs-table" hover responsive borderless>
                <CTableHead className="mb-4">
                  <CTableRow>
                    <CTableHeaderCell className="text-center th-start"></CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Owner</CTableHeaderCell>
                    <CTableHeaderCell>No of Followers</CTableHeaderCell>
                    <CTableHeaderCell className="th-end">Duration</CTableHeaderCell>
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
    </>
  )
}

export default Songs
