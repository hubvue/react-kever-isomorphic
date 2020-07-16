import Home from '../pages/Home'
import About from '../pages/About'

const routes = [
  {
    path: '/render',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/render/about',
    name: 'About',
    component: About,
    exact: true,
  },
]
export default routes
