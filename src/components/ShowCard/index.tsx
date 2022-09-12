import { StyleSheet, View } from 'react-native'
import { Card, TouchableRipple } from 'react-native-paper'

type Props = {
  image: string
  title: string
  onPress: () => void
}

export const CARD_WIDTH = 180
export const CARD_HEIGHT = 238

const ShowCard = ({ image, title, onPress }: Props) => {
  return (
    <TouchableRipple style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Card.Cover
          resizeMode="contain"
          source={{ uri: image }}
          style={styles.image}
        />
        <Card.Title
          title={title}
          titleNumberOfLines={2}
          titleVariant="labelLarge"
        />
      </View>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  content: { width: '100%', maxWidth: CARD_WIDTH - 16 },
  image: { backgroundColor: 'transparent' }
})

export default ShowCard
