import { StyleSheet, Text, View } from 'react-native'
import Details from '../components/Details'
import Tasks from '../components/Tasks'

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Details />
      <Tasks />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer: {
    padding: 5,
  }
})