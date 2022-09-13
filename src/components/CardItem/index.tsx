import { Card } from 'react-native-paper'

import * as S from './styles'

type Props = {
  image?: string
  title: string
  onPress: () => void
}

const CardItem = ({ image, title, onPress }: Props) => {
  return (
    <S.Container onPress={onPress}>
      <S.Content>
        <S.Image resizeMode="contain" source={{ uri: image }} />
        <Card.Title
          title={title}
          titleNumberOfLines={2}
          titleVariant="labelLarge"
        />
      </S.Content>
    </S.Container>
  )
}

export default CardItem
