import CardItem from '@components/CardItem'
import SearchFAB from '@components/SearchFAB'
import { CARD_HEIGHT, gridColumns } from '@config'
import { fetchShows } from '@services/shows'
import { FlashList } from '@shopify/flash-list'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Show, ShowsScreenProps } from '@types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as S from './styles'

const Shows = ({ navigation }: ShowsScreenProps) => {
  const { top } = useSafeAreaInsets()
  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(['shows'], fetchShows, {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return lastPage.length ? nextPage : undefined
      }
    })

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

  const renderFetching = () => <S.ActivityIndicator animating />

  if (isLoading) return <></>
  if (isError) return <></>

  return (
    <S.Container>
      <FlashList
        renderItem={renderData}
        numColumns={gridColumns}
        indicatorStyle="white"
        data={data?.pages.flat()}
        estimatedItemSize={CARD_HEIGHT}
        onEndReachedThreshold={0.8}
        onEndReached={fetchNextPage}
        contentContainerStyle={{ paddingTop: top }}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={isFetchingNextPage ? renderFetching : null}
      />
      <SearchFAB />
    </S.Container>
  )
}

export default Shows
