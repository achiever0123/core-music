import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Songs = React.lazy(() => import('./views/songs/Songs'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/songs', name: 'Songs', element: Songs },
]

export default routes
