// HistoryScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Book {
  title: string;
  author: string;
  genre: string;
  pages: number;
}

const HistoryScreen: React.FC<{ selectedBooks: Book[] }> = ({ selectedBooks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Screen</Text>
      <FlatList
        data={selectedBooks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text>Title: {item.title}</Text>
            <Text>Author: {item.author}</Text>
            <Text>Genre: {item.genre}</Text>
            <Text>Pages: {item.pages}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default HistoryScreen;
