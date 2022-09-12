import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowDetails from '@screens/ShowDetails'
import { RootStackParamList } from '@types'

import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ShowDetails" component={ShowDetails} />
    </Stack.Navigator>
  )
}

export default RootNavigator
