import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

interface NavProp {
  navigation: any
}

const SigninScreen = ({ navigation }: NavProp) => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText='Sign In'
      />
      <NavLink
        routeName='Signup'
        text='Dont have an account? Sign up instead!'
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})
