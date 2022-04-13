import trackerApi from '../api/tracker'
import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigate } from '../navigationRef'

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = (dispatch: any) => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList', '')
  } else {
    navigate('Signup', '')
  }
}

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch: any) => {
  return async ({ email, password }: any) => {
    try {
      const response = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })

      navigate('TrackList', '')
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      })
    }
  }
}

const signin = (dispatch: any) => {
  return async ({ email, password }: any) => {
    try {
      const response = await trackerApi.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })

      navigate('TrackList', '')
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      })
    }
  }
}

const signout = (dispatch: any) => {
  return () => {}
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
)
