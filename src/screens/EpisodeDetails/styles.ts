import { EPISODE_HEIGHT } from '@config'
import { Text as PaperText } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
`

export const Text = styled(PaperText)`
  margin-top: 16px;
`

export const Image = styled.Image`
  height: ${EPISODE_HEIGHT * 2 + 'px'};
  width: 100%;
  max-width: 400px;
  margin-right: 8px;
`
