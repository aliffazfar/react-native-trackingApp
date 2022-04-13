import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import AuthForm from '../components/AuthForm'
import { NavigationEvents } from 'react-navigation'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

interface NavProp {
  navigation: any
}

const SignupScreen = ({ navigation }: NavProp) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
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
