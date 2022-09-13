import { useIsFocused, useNavigation } from '@react-navigation/native'
import { ShowsScreenNavigationProp } from '@types'
import { useCallback, useState } from 'react'
import { FAB } from 'react-native-paper'

const SearchFAB = () => {
  const isFocused = useIsFocused()
  const [open, setOpen] = useState(false)
  const navigation = useNavigation<ShowsScreenNavigationProp>()

  const onStateChange = useCallback(() => setOpen((open) => !open), [setOpen])

  const actions = [
    {
      icon: 'theater',
      label: 'Search Shows',
      onPress: () => navigation.navigate('SearchShows')
    },
    {
      icon: 'account-group',
      label: 'Search People',
      onPress: () => navigation.navigate('SearchPeople')
    }
  ]

  return (
    <FAB.Group
      open={open}
      icon="magnify"
      actions={actions}
      onStateChange={onStateChange}
      visible={isFocused}
    />
  )
}

export default SearchFAB
