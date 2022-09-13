import CardItemgustav from '@components/CardItem'
import SearchList from '@components/SearchList'
import useDebounce from '@hooks/useDebounce'
import { searchPeople } from '@services/people'
import { Person, SearchPeopleScreenProps } from '@types'
import { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as S from './styles'

const SearchPeople = ({ navigation }: SearchPeopleScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 300)
  const { top, bottom } = useSafeAreaInsets()

  const onChangeSearch = (query: string) => setSearchQuery(query)

  const onPress = (person: Person) =>
    navigation.navigate('PersonDetails', { person })

  const renderData = ({ item }: { item: Person }) => {
    return (
      <CardItemgustav
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
        placeholder="Search People"
        onChangeText={onChangeSearch}
        icon="arrow-left"
        onIconPress={navigation.goBack}
        style={{ paddingTop: top }}
      />
      <SearchList<Person>
        query={debouncedQuery}
        queryKey="peolpe"
        queryFn={searchPeople}
        renderData={renderData}
      />
    </S.Container>
  )
}

export default SearchPeople
