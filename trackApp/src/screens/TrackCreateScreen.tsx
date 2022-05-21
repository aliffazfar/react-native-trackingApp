import React, { FC, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from 'react-navigation'

const TrackCreateScreen: FC = ({ isFocused }: any) => {
  const { addLocation } = useContext(LocationContext)

  const [err] = useLocation(isFocused, addLocation)

  return (
    <SafeAreaView>
      <Text h2> Create a Track and testing</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})
