import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import MapView from 'react-native-maps'

const Map: FC = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  )
}

export default Map

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})
