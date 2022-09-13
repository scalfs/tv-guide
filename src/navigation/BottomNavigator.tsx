import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Favorites from '@screens/Favorites'
import Shows from '@screens/Shows'
import { BottomTabsParamList } from '@types'
import * as NavigationBar from 'expo-navigation-bar'
import { Platform } from 'react-native'

if (Platform.OS === 'android') {
  NavigationBar.setButtonStyleAsync('light')
  NavigationBar.setBackgroundColorAsync('#2C2831')
}

const Tab = createMaterialBottomTabNavigator<BottomTabsParamList>()

const BottomNavigator = () => {
  return (
    <Tab.Navigator compact>
      <Tab.Screen
        name="Shows"
        component={Shows}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              size={24}
              color={color}
              name={focused ? 'movie-open' : 'movie-open-outline'}
            />
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              size={24}
              color={color}
              name={focused ? 'star' : 'star-outline'}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator
