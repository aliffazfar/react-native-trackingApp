import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'

const TrackCreateScreen: FC = () => {
  return (
    <SafeAreaView>
      <Text h2> Create a Track </Text>
      <Map />
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
