import React, { FC, useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen: FC = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}> Account Screen</Text>
      <Spacer>
        <Button title={'Sign Out'} onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})
