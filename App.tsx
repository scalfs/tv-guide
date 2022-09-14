import AnimatedAppLoader from '@components/AnimatedAppLoader'
import Background from '@components/Background'
import RootNavigator from '@navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DarkTheme } from '@theme'
import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={DarkTheme}>
          <NavigationContainer theme={DarkTheme}>
            <StatusBar style="light" translucent />
            <Background />
            <AnimatedAppLoader>
              <RootNavigator />
            </AnimatedAppLoader>
          </NavigationContainer>
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}
