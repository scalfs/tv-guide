import Episodes from '@components/Episodes'
import Schedule from '@components/Schedule'
import Summary from '@components/Summary'
import { ShowDetailsScreenProps } from '@types'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Divider } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as S from './styles'

const ShowDetails = ({ navigation, route }: ShowDetailsScreenProps) => {
  const { show } = route.params
  const insets = useSafeAreaInsets()

  const [isFavorite, setFavorite] = useState(false)

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={show.name} />
        <Appbar.Action
          onPress={() => setFavorite((fav) => !fav)}
          icon={isFavorite ? 'star' : 'star-outline'}
        />
      </Appbar.Header>

      <S.Container insets={insets} contentContainerStyle={styles.content}>
        <S.TopRow>
          <S.Image
            resizeMode="contain"
            source={{ uri: show.image?.original }}
          />

          <S.ChipsContainer>
            {show.genres.map((genre) => (
              <S.Chip compact key={genre} textStyle={styles.chip}>
                {genre}
              </S.Chip>
            ))}
          </S.ChipsContainer>
        </S.TopRow>

        <S.Title variant="titleLarge">Sumary</S.Title>
        <Divider />
        <Summary element={show.summary} />

        <S.Title variant="titleLarge" top={16}>
          Show Info
        </S.Title>
        <Divider />
        <Schedule
          schedule={show.schedule}
          runtime={show.averageRuntime}
          displayTitle
        />

        <S.Title variant="titleLarge" top={32}>
          Episodes
        </S.Title>
        <Divider />
        <Episodes showId={show.id} />
      </S.Container>
    </>
  )
}

const styles = StyleSheet.create({
  content: { paddingBottom: 16 },
  chip: { fontSize: 12 }
})

export default ShowDetails
