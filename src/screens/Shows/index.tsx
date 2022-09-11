import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = object

const Shows = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Shows</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ container: { flex: 1 } })

export default Shows
