import { Chip as PaperChip, Text } from 'react-native-paper'
import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled.ScrollView<{ insets: EdgeInsets }>`
  margin-bottom: ${({ insets: { bottom } }) => `${bottom}px`};
  padding: ${({ insets: { top } }) => `${top ?? 16}px 16px`};
`

export const TopRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 16px;
`

export const Image = styled.Image`
  width: 126px;
  height: 177px;
`

export const Headline = styled(Text)`
  flex-shrink: 1;
  margin-left: 8px;
`

export const ChipsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
`

export const Chip = styled(PaperChip)`
  margin: 4px;
  border-radius: 16px;
`

export const Title = styled(Text)<{ top?: number }>`
  margin-top: ${({ top }) => `${top ?? 0}px`};
`
