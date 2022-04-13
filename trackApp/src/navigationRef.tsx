import { NavigationActions, NavigationNavigateAction } from 'react-navigation'

let navigator: { dispatch: (arg0: NavigationNavigateAction) => void }

export const setNavigator = (nav: any) => {
  navigator = nav
}

export const navigate = (routeName: any, params: any) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}
