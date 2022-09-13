import { useWindowDimensions } from 'react-native'
import { useTheme } from 'react-native-paper'
import RenderHTML, { MixedStyleDeclaration } from 'react-native-render-html'

type Props = {
  element: string
}

const Summary = ({ element }: Props) => {
  const { colors } = useTheme()
  const { width } = useWindowDimensions()

  const baseStyle: MixedStyleDeclaration = { color: colors.text }

  return (
    <RenderHTML
      contentWidth={width}
      baseStyle={baseStyle}
      source={{ html: element }}
    />
  )
}

export default Summary
