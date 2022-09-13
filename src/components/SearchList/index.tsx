import { CARD_HEIGHT, gridColumns } from '@config'
import { FlashList } from '@shopify/flash-list'
import { useQuery } from '@tanstack/react-query'
import { StyleSheet } from 'react-native'

interface Props<T> {
  query: string
  queryKey: string
  queryFn: (q: string) => Promise<T[]>
  renderData: ({ item }: { item: T }) => JSX.Element
}

function SearchList<T extends { id: number }>({
  query,
  queryKey,
  queryFn,
  renderData
}: Props<T>) {
  const { data, isLoading, isError } = useQuery(
    [queryKey, query],
    () => queryFn(query),
    { enabled: Boolean(query) }
  )

  if (isLoading) return null
  if (isError) return null

  return (
    <FlashList
      data={data}
      renderItem={renderData}
      numColumns={gridColumns}
      indicatorStyle="white"
      estimatedItemSize={CARD_HEIGHT}
      contentContainerStyle={styles.content}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({ content: { paddingTop: 32 } })

export default SearchList
