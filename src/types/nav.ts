import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Show } from './tvmaze'

export type RootStackParamList = {
  Main: undefined
  ShowDetails: { show: Show }
}

export type BottomTabsParamList = {
  Home: undefined
  Favorites: undefined
}

export type HomeScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabsParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>

export type ShowDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ShowDetails'
>
