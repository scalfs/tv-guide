import ShowCard, { CARD_HEIGHT, CARD_WIDTH } from '@components/ShowCard'
import { fetchShows } from '@services/shows'
import { FlashList } from '@shopify/flash-list'
import { useInfiniteQuery } from '@tanstack/react-query'
import { HomeScreenProps, Show } from '@types'
import { Dimensions, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const numColumns = Math.floor(Dimensions.get('screen').width / CARD_WIDTH)

const Shows = ({ navigation }: HomeScreenProps) => {
  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(['shows'], fetchShows, {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return lastPage.length ? nextPage : undefined
      }
    })

  if (isLoading) return <></>
  if (isError) return <></>

  const onPress = (show: Show) => navigation.navigate('ShowDetails', { show })

  const renderData = ({ item }: { item: Show }) => {
    return (
      <ShowCard
        title={item.name}
        image={item.image.medium}
        onPress={() => onPress(item)}
      />
    )
  }

  const renderFetching = () => <ActivityIndicator animating />

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        renderItem={renderData}
        numColumns={numColumns}
        indicatorStyle="white"
        data={data.pages.flat()}
        estimatedItemSize={CARD_HEIGHT}
        onEndReachedThreshold={0.8}
        onEndReached={fetchNextPage}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponentStyle={styles.loading}
        ListFooterComponent={isFetchingNextPage ? renderFetching : null}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 8 },
  loading: { marginVertical: 16 }
})

export default Shows
