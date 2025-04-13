import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const dummyEvents = [
  { id: '1', title: 'Tech Meetup', date: '2025-04-20', location: 'San Francisco' },
  { id: '2', title: 'Art Exhibition', date: '2025-04-25', location: 'New York' },
  { id: '3', title: 'Cooking Class', date: '2025-05-01', location: 'Chicago' },
];

const EventItem = ({ title, date, location }) => (
  <View style={styles.eventItem}>
    <Text style={styles.eventTitle}>{title}</Text>
    <Text>{date} • {location}</Text>
  </View>
);

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.title}>Welcome to Meetup Clone</Text>
        <Text style={styles.subtitle}>Find events near you</Text>
      </View>

      <View style={styles.featuredSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Events</Text>
          <Link href="/events" style={styles.seeAllLink}>See all</Link>
        </View>
        
        <FlatList
          data={dummyEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventItem
              title={item.title}
              date={item.date}
              location={item.location}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>

      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Link href="/login" style={styles.actionLinkText}>Log In</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Link href="/register" style={styles.actionLinkText}>Create Account</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeSection: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  featuredSection: {
    padding: 16,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllLink: {
    color: '#e91e63',
  },
  listContent: {
    marginBottom: 16,
  },
  eventItem: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  actionsSection: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#e91e63',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  actionLinkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});