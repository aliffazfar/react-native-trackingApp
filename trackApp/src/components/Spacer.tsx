import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

const Spacer = ({ children }: any) => {
  return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
})

export default Spacer
