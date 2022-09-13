import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = object

const Favorites = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ container: { flex: 1 } })

export default Favorites
