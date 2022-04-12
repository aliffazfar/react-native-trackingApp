import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

interface spaceProp {
  children: any
}

const Spacer: FC<spaceProp> = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
})

export default Spacer
