import CardItem from '@components/CardItem'
import SearchFAB from '@components/SearchFAB'
import { CARD_HEIGHT, gridColumns } from '@config'
import { fetchShows } from '@services/shows'
import { FlashList } from '@shopify/flash-list'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Show, ShowsScreenProps } from '@types'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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

  const renderFetching = () => <ActivityIndicator animating />

  if (isLoading) return <></>
  if (isError) return <></>

  return (
    <View style={styles.container}>
      <FlashList
        renderItem={renderData}
        numColumns={gridColumns}
        indicatorStyle="white"
        data={data.pages.flat()}
        estimatedItemSize={CARD_HEIGHT}
        onEndReachedThreshold={0.8}
        onEndReached={fetchNextPage}
        contentContainerStyle={{ paddingTop: top }}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponentStyle={styles.loading}
        ListFooterComponent={isFetchingNextPage ? renderFetching : null}
      />
      <SearchFAB />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 8 },
  loading: { marginVertical: 16 }
})

export default Shows
