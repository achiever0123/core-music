import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { cilArrowTop, cilArrowBottom, cilOptions, cilChartLine } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CChartLine } from '@coreui/react-chartjs'

import avatar1 from 'src/assets/images/albums/1.png'
import avatar2 from 'src/assets/images/albums/2.png'
import avatar3 from 'src/assets/images/albums/3.png'
import avatar4 from 'src/assets/images/albums/4.png'
import avatar5 from 'src/assets/images/albums/5.png'
import avatar6 from 'src/assets/images/albums/6.png'
import avatar7 from 'src/assets/images/albums/7.png'
import avatar8 from 'src/assets/images/albums/8.png'
import avatar9 from 'src/assets/images/albums/9.png'
import avatar10 from 'src/assets/images/albums/10.png'

const Albums = () => {
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
  return (
    <>
      <CRow className="mb-4 albums-card g-3">
        <CCol xs={12} md={7} sm={7}>
          <CCard>
            <CCardHeader>
              <div>Top Album</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody>
              <CRow className="top-album-card">
                <CCol xs={1} md={1}></CCol>
                <CCol xs={3} md={3} className="albums-image-container">
                  <img alt="album" src={avatar8} className="albums-image" />
                </CCol>
                <CCol xs={4} md={4}>
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
                <CCol xs={4} md={4}>
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
              <div className="card-small-part-1">
                <p className="small-part-span-1">Driver License</p>
                <span>Olivia Rodrigo</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={5} sm={5}>
          <CCard>
            <CCardHeader>
              <div>Trending</div>
              <div>
                <CIcon icon={cilOptions} />
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="card-small-part-1">
                <p className="small-part-span-1">Leave The Door Open</p>
                <span>Silk Sonic ( Bruno Mars & Anderson .Paak) </span>
              </div>
              <CRow className="pt-4">
                <CCol xs={4} md={4} sm={4} className="albums-image-container-1">
                  <img alt="album" src={avatar4} className="albums-image" />
                </CCol>
                <CCol xs={8} md={8} sm={8}>
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
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="g-3">
        <CCol xs={12} md={6} sm={6}>
          <CCard>
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
                    <img alt="album" src={item.avatar} className="albums-image" />
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
        </CCol>
        <CCol xs={12} md={6} sm={6}>
          <CCard>
            <CCardHeader>
              <div>New Albums</div>
              <div>
                <span className="m-2"> Week </span>
                <span> Month </span>
              </div>
            </CCardHeader>
            <CCardBody className="p-4">
              {albumsList.map((item, index) => (
                <CRow key={index} className="top-albums-list-item-1 p-2 m-3">
                  <CCol xs={2} md={2} sm={2} className="list-1 text-center">
                    <p>{index + 1}</p>
                  </CCol>
                  <CCol xs={2} md={2} sm={2} className="p-0 list-2">
                    <img alt="album" src={item.avatar} className="albums-image" />
                  </CCol>
                  <CCol xs={7} md={7} sm={7} className="list-3">
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                    <p className="list-3-item"></p>
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

export default Albums
