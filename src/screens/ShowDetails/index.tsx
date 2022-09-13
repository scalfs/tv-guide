import Schedule from '@components/Schedule'
import Summary from '@components/Summary'
import { ShowDetailsScreenProps } from '@types'
import { useState } from 'react'
import { View } from 'react-native'
import { Appbar, Divider, Text } from 'react-native-paper'

import * as S from './styles'

const ShowDetails = ({ navigation, route }: ShowDetailsScreenProps) => {
  const { show } = route.params

  const [isFavorite, setFavorite] = useState(false)

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Details" />
        <Appbar.Action
          onPress={() => setFavorite((fav) => !fav)}
          icon={isFavorite ? 'star' : 'star-outline'}
        />
      </Appbar.Header>

      <S.Container>
        <S.TopRow>
          <S.Image
            source={{ uri: show.image?.original }}
            resizeMode="contain"
          />

          <View style={{ flex: 1 }}>
            <S.Headline variant="headlineLarge">{show.name}</S.Headline>

            <S.ChipsContainer>
              {show.genres.map((genre) => (
                <S.Chip compact key={genre} textStyle={{ fontSize: 12 }}>
                  {genre}
                </S.Chip>
              ))}
            </S.ChipsContainer>
          </View>
        </S.TopRow>

        <Text variant="titleLarge">Sumary</Text>
        <Divider />
        <Summary element={show.summary} />

        <Text variant="titleLarge">Show Info</Text>
        <Divider />
        <Schedule
          schedule={show.schedule}
          runtime={show.averageRuntime}
          displayTitle
        />
      </S.Container>
    </View>
  )
}

export default ShowDetails
