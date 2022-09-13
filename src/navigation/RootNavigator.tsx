import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchPeople from '@screens/SearchPeople'
import SearchShows from '@screens/SearchShows'
import ShowDetails from '@screens/ShowDetails'
import { RootStackParamList } from '@types'

import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={BottomNavigator} />
      <Stack.Screen name="ShowDetails" component={ShowDetails} />
      <Stack.Screen name="SearchShows" component={SearchShows} />
      <Stack.Screen name="SearchPeople" component={SearchPeople} />
    </Stack.Navigator>
  )
}

export default RootNavigator
