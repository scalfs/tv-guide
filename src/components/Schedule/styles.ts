import { Text as PaperText } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`

export const Text = styled(PaperText)`
  flex-shrink: 1;
`
