import SeasonsDropdown from '@components/SeasonsDropdown'
import { useNavigation } from '@react-navigation/native'
import { fetchEpisodes } from '@services/shows'
import { useQuery } from '@tanstack/react-query'
import { ShowDetailsScreenNavigationProp } from '@types'
import { formatDate } from '@utils/format'
import { useMemo, useState } from 'react'
import { Text, TouchableRipple } from 'react-native-paper'

import * as S from './styles'

interface Props {
  showId: number
}

const Episodes = ({ showId }: Props) => {
  const [selectedSeason, setSelectedSeason] = useState(1)
  const { navigate } = useNavigation<ShowDetailsScreenNavigationProp>()

  const {
    data: episodes,
    isLoading,
    isError
  } = useQuery(['episodes', showId], () => fetchEpisodes(showId))

  const seasons = useMemo(
    () => (episodes ? episodes[episodes.length - 1].season : 1),
    [episodes]
  )

  const seasonEpisodes = useMemo(
    () =>
      (episodes ?? []).filter((episode) => episode.season === selectedSeason),
    [episodes, selectedSeason]
  )

  if (isLoading) return null
  if (isError) return null

  return (
    <S.Container>
      <SeasonsDropdown
        seasons={seasons}
        selectedSeason={selectedSeason}
        onSelect={(s) => setSelectedSeason(s)}
      />
      {seasonEpisodes.map((episode) => (
        <TouchableRipple
          key={episode.id}
          onPress={() => navigate('EpisodeDetails', { episode })}
        >
          <S.Episode>
            <S.Image source={{ uri: episode.image?.medium }} />
            <S.TitleContainer>
              <Text>
                {episode.number}. {episode.name}
              </Text>
              <Text variant="bodySmall">{formatDate(episode.airdate)}</Text>
            </S.TitleContainer>
          </S.Episode>
        </TouchableRipple>
      ))}
    </S.Container>
  )
}

export default Episodes
