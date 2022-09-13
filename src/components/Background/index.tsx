import { useTheme } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'

const Background = () => {
  const { colors } = useTheme()
  return (
    <View
      style={[{ backgroundColor: colors.background }, StyleSheet.absoluteFill]}
    />
  )
}

export default Background
