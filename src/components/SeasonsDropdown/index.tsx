import { useState } from 'react'
import { Menu, useTheme } from 'react-native-paper'

import * as S from './styles'

interface Props {
  seasons: number
  selectedSeason: number
  onSelect: (season: number) => void
}

const SeasonsDropdown = ({ seasons, selectedSeason, onSelect }: Props) => {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  const { colors } = useTheme()

  return (
    <S.Container>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <S.Button
            onPress={openMenu}
            mode="outlined"
            icon="chevron-down"
            textColor={colors.secondary}
            contentStyle={{ flexDirection: 'row-reverse' }}
          >
            Season {selectedSeason}
          </S.Button>
        }
      >
        {Array(seasons)
          .fill('')
          .map((_, index) => (
            <Menu.Item
              key={index}
              title={`Season ${index + 1}`}
              onPress={() => {
                onSelect(index + 1)
                closeMenu()
              }}
            />
          ))}
      </Menu>
    </S.Container>
  )
}

export default SeasonsDropdown
