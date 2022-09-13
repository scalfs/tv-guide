import Summary from '@components/Summary'
import { ShowDetailsScreenProps } from '@types'
import { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Appbar, Chip, Text } from 'react-native-paper'

const ShowDetails = ({ navigation, route }: ShowDetailsScreenProps) => {
  const { show } = route.params

  const [isFavorite, setFavorite] = useState(false)

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Details" />
        <Appbar.Action
          onPress={() => setFavorite((fav) => !fav)}
          icon={isFavorite ? 'star' : 'star-outline'}
        />
      </Appbar.Header>

      <View style={styles.topRow}>
        <Image
          source={{ uri: show.image?.original }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={{ flex: 1 }}>
          <Text variant="headlineSmall">{show.name}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {show.genres.map((genre) => (
              <Chip
                compact
                key={genre}
                style={{ margin: 2 }}
                textStyle={{ fontSize: 12 }}
              >
                {genre}
              </Chip>
            ))}
          </View>
        </View>
      </View>
      <Summary element={show.summary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topRow: { flexDirection: 'row', width: '100%' },
  image: { width: 126, height: 177 }
})

export default ShowDetails
