import trackerApi from '../api/tracker'
import createDataContext from './createDataContext'

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup = (dispatch: any) => {
  return async ({ email, password }: any) => {
    try {
      const response = await trackerApi.post('/signup', { email, password })
      console.log(response.data)
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      })
    }
  }
}

const signin = (dispatch: any) => {
  return ({ email, password }) => {}
}

const signout = (dispatch: any) => {
  return () => {}
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: '' }
)
