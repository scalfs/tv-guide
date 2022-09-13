import { Dimensions } from 'react-native'

export const CARD_WIDTH = 180
export const CARD_HEIGHT = 238

export const gridColumns = Math.floor(
  Dimensions.get('screen').width / CARD_WIDTH
)
