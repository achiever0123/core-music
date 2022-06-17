import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Songs = React.lazy(() => import('./views/songs/Songs'))
const Albums = React.lazy(() => import('./views/albums/Albums'))
const Notifications = React.lazy(() => import('./views/notifications/Notifications'))
const Support = React.lazy(() => import('./views/support/Support'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/songs', name: 'Songs', element: Songs },
  { path: '/albums', name: 'Albums', element: Albums },
  { path: '/notifications', name: 'Notifications', element: Notifications },
  { path: '/support', name: 'Support', element: Support },
]

export default routes
