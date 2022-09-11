import { NavigationContainer } from '@react-navigation/native'
import Favorites from '@screens/Favorites'
import Shows from '@screens/Shows'
import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'

// undefined means that the route doesn't have params
export type RootStackParamList = object

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  )
}

const BottomNavigator = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'movie',
      unfocusedIcon: 'movie-outline'
    },
    {
      key: 'favorites',
      title: 'Favorites',
      focusedIcon: 'star',
      unfocusedIcon: 'star-outline'
    }
  ])
  const renderScene = BottomNavigation.SceneMap({
    home: Shows,
    favorites: Favorites
  })

  return (
    <BottomNavigation
      compact
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default RootNavigator
