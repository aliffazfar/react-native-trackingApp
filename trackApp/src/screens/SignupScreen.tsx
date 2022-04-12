import React, { FC } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

interface NavProp {
  navigation: any
}

const SignupScreen: FC<NavProp> = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> Signup Screen</Text>
      <Button
        title='Go to Signin'
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title='Go to main flow'
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})
