import { fetchCastCredits } from '@services/people'
import { useQuery } from '@tanstack/react-query'
import { PersonDetailsScreenProps } from '@types'
import React from 'react'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper'

import * as S from './styles'

const PersonDetails = ({ navigation, route }: PersonDetailsScreenProps) => {
  const { person } = route.params
  const { isLoading, isError } = useQuery(['person', person.id], () =>
    fetchCastCredits(person.id)
  )

  if (isLoading) return null
  if (isError) return null

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Details" />
      </Appbar.Header>
      <S.Container>
        <S.TopRow>
          <S.Image source={{ uri: person.image.original }} />
          <S.Headline variant="headlineLarge">{person.name}</S.Headline>
        </S.TopRow>
      </S.Container>
    </View>
  )
}

export default PersonDetails
