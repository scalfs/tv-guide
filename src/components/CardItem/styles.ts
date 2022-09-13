import { CARD_WIDTH } from '@config'
import { Card, TouchableRipple } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled(TouchableRipple)`
  flex: 1;
  align-items: center;
`

export const Content = styled.View`
  width: 100%;
  max-width: ${CARD_WIDTH - 16}px;
`

export const Image = styled(Card.Cover)`
  background-color: transparent;
`
