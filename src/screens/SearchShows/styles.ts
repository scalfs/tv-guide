import styled from 'styled-components/native'

export const Container = styled.View<{ bottom: number }>`
  flex: 1;
  margin-bottom: ${({ bottom }) => `${bottom}px`};
`
