import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Person, Show } from './tvmaze'

export type RootStackParamList = {
  Main: undefined
  SearchShows: undefined
  SearchPeople: undefined
  ShowDetails: { show: Show }
  PersonDetails: { person: Person }
}

export type BottomTabsParamList = {
  Shows: undefined
  Favorites: undefined
}

export type ShowsScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabsParamList, 'Shows'>,
  NativeStackScreenProps<RootStackParamList>
>

export type ShowDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ShowDetails'
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
