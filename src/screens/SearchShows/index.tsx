import CardItem from '@components/CardItem'
import SearchList from '@components/SearchList'
import useDebounce from '@hooks/useDebounce'
import { searchShows } from '@services/shows'
import { SearchShowsScreenProps, Show } from '@types'
import { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as S from './styles'

const SearchShows = ({ navigation }: SearchShowsScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 300)
  const { top, bottom } = useSafeAreaInsets()

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const onPress = (show: Show) => navigation.navigate('ShowDetails', { show })

  const renderData = ({ item }: { item: Show }) => {
    return (
      <CardItem
        title={item.name}
        image={item.image?.medium}
        onPress={() => onPress(item)}
      />
    )
  }

  return (
    <S.Container bottom={bottom}>
      <Searchbar
        autoFocus
        value={searchQuery}
        placeholder="Search Shows"
        onChangeText={onChangeSearch}
        icon="arrow-left"
        onIconPress={navigation.goBack}
        style={{ paddingTop: top }}
      />
      <SearchList<Show>
        query={debouncedQuery}
        queryKey="shows"
        queryFn={searchShows}
        renderData={renderData}
      />
    </S.Container>
  )
}

export default SearchShows
