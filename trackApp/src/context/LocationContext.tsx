import createDataContext from './createDataContext'

const locationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_current_location':
      return {
        ...state,
        currentLocation: action.payload,
      }
    default:
      return state
  }
}

const startRecording = (dispatch: any) => () => {}
const stopRecording = (dispatch: any) => () => {}

const addLocation = (dispatch: any) => (location: any) => {
  dispatch({ type: 'add_current_location', payload: location })
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)
