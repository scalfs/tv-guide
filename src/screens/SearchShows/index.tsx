import CardItem from '@components/CardItem'
import SearchList from '@components/SearchList'
import useDebounce from '@hooks/useDebounce'
import { searchShows } from '@services/shows'
import { SearchShowsScreenProps, Show } from '@types'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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
    <View style={[styles.container, { marginBottom: bottom }]}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 8 }
})

export default SearchShows
