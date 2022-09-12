import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'
import merge from 'deepmerge'
import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme
} from 'react-native-paper'

export const DefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme)
export const DarkTheme = merge(PaperDarkTheme, NavigationDarkTheme)
