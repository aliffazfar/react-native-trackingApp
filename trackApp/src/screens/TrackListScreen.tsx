import React, { FC } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

interface NavProp {
  navigation: any
}

const TrackListScreen: FC<NavProp> = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> TrackListScreen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})
