import { StyleSheet, Text, View, FlatList } from 'react-native';

const dummyEvents = [
  { id: '1', title: 'Tech Meetup', date: '2025-04-20', location: 'San Francisco' },
  { id: '2', title: 'Art Exhibition', date: '2025-04-25', location: 'New York' },
  { id: '3', title: 'Cooking Class', date: '2025-05-01', location: 'Chicago' },
  { id: '4', title: 'Hiking Group', date: '2025-05-05', location: 'Portland' },
  { id: '5', title: 'Book Club', date: '2025-05-10', location: 'Boston' },
  { id: '6', title: 'Photography Workshop', date: '2025-05-15', location: 'Seattle' },
  { id: '7', title: 'Startup Networking', date: '2025-05-20', location: 'Austin' },
];

const EventItem = ({ title, date, location }) => (
  <View style={styles.eventItem}>
    <Text style={styles.eventTitle}>{title}</Text>
    <Text>{date} • {location}</Text>
  </View>
);

const Events = () => {
  return (
    <View style={styles.container}>
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
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
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
});