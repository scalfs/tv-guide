import {
  MaterialBottomTabNavigationProp,
  MaterialBottomTabScreenProps
} from '@react-navigation/material-bottom-tabs'
import {
  CompositeNavigationProp,
  CompositeScreenProps
} from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack'

import { Episode, Person, Show } from './tvmaze'

export type RootStackParamList = {
  Main: undefined
  SearchShows: undefined
  SearchPeople: undefined
  ShowDetails: { show: Show }
  PersonDetails: { person: Person }
  EpisodeDetails: { episode: Episode }
}

export type BottomTabsParamList = {
  Shows: undefined
  Favorites: undefined
}

export type ShowsScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabsParamList, 'Shows'>,
  NativeStackScreenProps<RootStackParamList>
>

export type ShowsScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<BottomTabsParamList, 'Shows'>,
  NativeStackNavigationProp<RootStackParamList>
>

export type ShowDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ShowDetails'
>

export type ShowDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ShowDetails'
>

export type EpisodeDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EpisodeDetails'
>

export type PersonDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PersonDetails'
>

export type SearchPeopleScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchPeople'
>

export type SearchShowsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchShows'
>
