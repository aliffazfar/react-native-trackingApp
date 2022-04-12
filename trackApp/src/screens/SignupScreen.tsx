import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface NavProp {
  navigation: any
}

const SignupScreen = ({ navigation }: NavProp) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={{ textAlign: 'center', padding: 10 }}>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Input label='Email' />
      <Input label='Password' />
      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})
