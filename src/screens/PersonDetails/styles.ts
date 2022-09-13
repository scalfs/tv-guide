import { Text } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
`

export const TopRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const Image = styled.Image`
  width: 126px;
  height: 177px;
`

export const Headline = styled(Text)`
  flex-shrink: 1;
  margin-left: 8px;
`
