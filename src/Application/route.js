
import { route as authorizedRoute } from './components/Authorized'
import { route as loginRoute } from './components/Login'
import { view as component } from './view.jsx'

export const route = {
  path: '/',
  component,
  indexRoute: {
    onEnter: ({ location: { pathname } }, replace) => {
      replace(`${pathname}login`)
    }
  },
  childRoutes: [
    authorizedRoute,
    loginRoute
  ]
}
