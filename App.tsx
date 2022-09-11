import RootNavigator from '@navigation/RootNavigator'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar style="auto" translucent />
        <RootNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
