import { useState, useEffect } from 'react'
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'

export default (shouldTrack: any, callback: any) => {
  const [err, setErr] = useState(null)
  const [subscriber, setSubscriber] = useState<any>(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
      if (!granted) {
        throw new Error('Location permission not granted')
      }
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      )
      setSubscriber(sub)
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    if (shouldTrack) {
      startWatching()
    } else {
      subscriber.remove()
      setSubscriber(null)
    }
  }, [shouldTrack])

  return [err]
}
