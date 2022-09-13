import { EPISODE_HEIGHT, EPISODE_WIDTH } from '@config'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 32px;
`

export const Episode = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`

export const TitleContainer = styled.View`
  flex-shrink: 1;
`

export const Image = styled.Image`
  height: ${EPISODE_HEIGHT + 'px'};
  width: ${EPISODE_WIDTH + 'px'};
  margin-right: 8px;
`
