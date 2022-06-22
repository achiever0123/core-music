import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Songs = React.lazy(() => import('./views/songs/Songs'))
const Albums = React.lazy(() => import('./views/albums/Albums'))
const Notifications = React.lazy(() => import('./views/notifications/Notifications'))
const Support = React.lazy(() => import('./views/support/Starred'))
const Artists = React.lazy(() => import('./views/users/artists.js'))
const listeners = React.lazy(() => import('./views/users/listeners'))
const login = React.lazy(() => import('./views/pages/login/Login'))
const discovered_songs = React.lazy(() => import('./views/discovered/songs'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/songs', name: 'Songs', element: Songs },
  { path: '/albums', name: 'Albums', element: Albums },
  { path: '/notifications', name: 'Notifications', element: Notifications },
  { path: '/support', name: 'Support', element: Support },
  { path: '/starred', name: 'Support', element: Support },
  { path: '/artists', name: 'Artists', element: Artists },
  { path: '/listeners', name: 'Listeners', element: listeners },
  { path: '/login', name: 'Login', element: login },
  { path: '/discovered_songs', name: 'Discovered', element: discovered_songs },
]

export default routes
