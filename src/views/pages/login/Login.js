import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from 'src/assets/images/logo.png'

const Login = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xs={12} md={6} sm={6} className="text-center">
            <img src={logo} alt="logo" className="logo-image"></img>
          </CCol>
          <CCol xs={12} md={6} sm={6} className="mt-4">
            <CForm>
              <div className="d-flex mb-4">
                <h1>Login to&nbsp;</h1>
                <h1 className="logo-napollo">Napollo</h1>
              </div>
              <CInputGroup className="mb-3 pt-4">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput placeholder="Username" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-4 pt-4">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </CInputGroup>
              <CRow>
                <CCol xs={6}>
                  <CButton className="px-4 mt-4 login-submit">Login</CButton>
                </CCol>
                <CCol xs={6} className="text-right">
                  <CButton className="px-0 mt-4 login-forgot">Forgot password?</CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
