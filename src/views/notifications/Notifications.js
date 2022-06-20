import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CButton,
} from '@coreui/react'

import { cilFilter, cilList, cilOptions } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Notifications = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <CButton
            color="warning"
            variant="outline"
            style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
          >
            Send Message
          </CButton>
        </div>
        <div className="notification-header-right">
          <a href="/notificatinos">
            <CIcon icon={cilList} /> Memos
          </a>
          <a href="/notifications">
            <CIcon icon={cilFilter} /> Filter
          </a>
        </div>
      </div>
      <hr className="mb-4"></hr>
      <CRow xs={{ gutterY: 4 }} className="mb-4 notification-cards">
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">23 April, 2022</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">23 April, 2022</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">23 April, 2022</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">23 April, 2022</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <CCard>
            <CCardBody>
              <CCardTitle>
                <div>Weekly StartUp</div>
                <div>
                  <CIcon icon={cilOptions} />
                </div>
              </CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
              <CCardText>
                FRIENDLY REMIDER: Our weekly standups scheduled for every Friday is coming up in 3
                days.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Notifications
