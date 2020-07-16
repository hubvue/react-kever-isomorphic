import React, { FC, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from './routes'

interface AppProps {
  message?: string
}

const App: FC<AppProps> = ({ message }) => {
  return (
    <div>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <p>{message}</p>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
