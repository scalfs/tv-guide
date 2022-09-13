import Summary from '@components/Summary'
import { EpisodeDetailsScreenProps } from '@types'
import { addLeadingZero } from '@utils/format'
import { Appbar } from 'react-native-paper'

import * as S from './styles'

const EpisodeDetails = ({ navigation, route }: EpisodeDetailsScreenProps) => {
  const { episode } = route.params

  const title = `S${addLeadingZero(episode.season)}E${addLeadingZero(
    episode.number
  )}`
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Episode Details" />
      </Appbar.Header>
      <S.Container>
        <S.Image resizeMode="cover" source={{ uri: episode.image?.original }} />
        <S.Text variant="headlineMedium">
          {title} - {episode.name}
        </S.Text>
        <Summary element={episode.summary} />
      </S.Container>
    </>
  )
}

export default EpisodeDetails
