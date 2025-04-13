import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Meetup Clone</Text>
      <Text style={styles.text}>
        This is a simple proof of concept for a Meetup clone app built with React Native and Expo.
      </Text>
      <Text style={styles.text}>
        Find events, connect with people, and join communities with similar interests.
      </Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  }
})