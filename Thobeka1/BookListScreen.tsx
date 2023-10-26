import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, TextInput } from 'react-native';

interface Book {
  title: string;
  author: string;
  genre: string;
  pages: number;
  description: string;
}

const initialBooks: Book[] = [
  {
    title: 'Book 1',
    author: 'Author 1',
    genre: 'Fiction',
    pages: 200,
    description: 'This is a great book about...',
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    genre: 'Non-Fiction',
    pages: 300,
    description: 'A non-fiction book providing insights on...',
  },
    {
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Fiction',
      pages: 200,
      description: 'This is a great book about...',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      genre: 'Non-Fiction',
      pages: 300,
      description: 'A non-fiction book providing insights on...',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      genre: 'Mystery',
      pages: 250,
      description: 'A thrilling mystery novel with unexpected twists...',
    },
    {
      title: 'Book 4',
      author: 'Author 4',
      genre: 'Science Fiction',
      pages: 350,
      description: 'An epic sci-fi adventure in a distant galaxy...',
    },
    {
      title: 'Book 5',
      author: 'Author 5',
      genre: 'Fantasy',
      pages: 280,
      description: 'A magical journey through a mystical realm...',
    },
    {
      title: 'Book 6',
      author: 'Author 6',
      genre: 'Fiction',
      pages: 220,
      description: 'A gripping fiction novel that you cannot put down...',
    },
    {
      title: 'Book 7',
      author: 'Author 7',
      genre: 'Non-Fiction',
      pages: 310,
      description: 'A non-fiction book filled with valuable insights...',
    },
    {
      title: 'Book 8',
      author: 'Author 8',
      genre: 'Mystery',
      pages: 270,
      description: 'A mysterious tale of unexpected events...',
    },
    {
      title: 'Book 9',
      author: 'Author 9',
      genre: 'Science Fiction',
      pages: 400,
      description: 'A futuristic sci-fi novel set in the year 3025...',
    },
    {
      title: 'Book 10',
      author: 'Author 10',
      genre: 'Fantasy',
      pages: 310,
      description: 'A fantastical adventure in a magical world...',
    },
    {
      title: 'Book 11',
      author: 'Author 11',
      genre: 'Fiction',
      pages: 240,
      description: 'A compelling fictional story with intriguing characters...',
    },
    {
      title: 'Book 12',
      author: 'Author 12',
      genre: 'Non-Fiction',
      pages: 280,
      description: 'A non-fiction work exploring profound ideas...',
    },
    {
      title: 'Book 13',
      author: 'Author 13',
      genre: 'Mystery',
      pages: 320,
      description: 'A mind-bending mystery that keeps you guessing...',
    },
    {
      title: 'Book 14',
      author: 'Author 14',
      genre: 'Science Fiction',
      pages: 380,
      description: 'A futuristic science fiction tale of technology and humanity...',
    },
    {
      title: 'Book 15',
      author: 'Author 15',
      genre: 'Fantasy',
      pages: 270,
      description: 'An enchanting fantasy adventure through mythical lands...',
    },
    {
      title: 'Book 16',
      author: 'Author 16',
      genre: 'Fiction',
      pages: 290,
      description: 'A heartwarming fictional story of love and life...',
    },
  ];
  

const BookListScreen: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (!search) {
      setBooks(initialBooks);
    } else {
      const filteredBooks = initialBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooks(filteredBooks);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search pre-list"
        value={search}
        onChangeText={(text) => setSearch(text)}
        onEndEditing={handleSearch}
      />
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => setSelectedBook(item)}>
            <View style={styles.bookItem}>
              <Text>Title: {item.title}</Text>
              <Text>Author: {item.author}</Text>
              <Text>Genre: {item.genre}</Text>
              <Text>Pages: {item.pages}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      {selectedBook && (
        <View style={styles.bookDetails}>
          <Text style={styles.bookDetailTitle}>{selectedBook.title}</Text>
          <Text>Author: {selectedBook.author}</Text>
          <Text>Genre: {selectedBook.genre}</Text>
          <Text>Pages: {selectedBook.pages}</Text>
          <Text>Description: {selectedBook.description}</Text>
          <TouchableWithoutFeedback onPress={() => setSelectedBook(null)}>
            <View style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
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
  searchInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bookItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  bookDetails: {
    backgroundColor: '#fff',
    padding: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  bookDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
  },
});

export default BookListScreen;
