import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const genres = ['Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction', 'Fantasy'];

const HomeScreen: React.FC = () => {
  const [selectedDetail, setSelectedDetail] = useState('title');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('Select Genre');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookPages, setBookPages] = useState('');
  const [books, setBooks] = useState<{ title: string; author: string; genre: string; pages: number }[]>([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectGenre = (genre: string) => {
    setSelectedGenre(genre);
    toggleModal();
  };

  const handleAddBook = () => {
    if (bookTitle && bookAuthor && selectedGenre !== 'Select Genre' && bookPages) {
      const newBook = {
        title: bookTitle,
        author: bookAuthor,
        genre: selectedGenre,
        pages: parseInt(bookPages),
      };

      setBooks([...books, newBook]);

      setBookTitle('');
      setBookAuthor('');
      setSelectedGenre('Select Genre');
      setBookPages('');
      toggleModal();
    } else {
      console.log('Please fill in all book details.');
    }
  };

  // Calculate the total pages read across all books
  const totalReadPages = books.reduce((total, book) => total + book.pages, 0);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedDetail === 'title' && styles.selectedButton]}
          onPress={() => setSelectedDetail('title')}
        >
          <Text>Title</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedDetail === 'author' && styles.selectedButton]}
          onPress={() => setSelectedDetail('author')}
        >
          <Text>Author</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedDetail === 'genre' && styles.selectedButton]}
          onPress={toggleModal}
        >
          <Text>{selectedGenre}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedDetail === 'pages' && styles.selectedButton]}
          onPress={() => setSelectedDetail('pages')}
        >
          <Text>Pages</Text>
        </TouchableOpacity>
      </View>
      <Button title="Add Book" onPress={toggleModal} />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Text>Select Genre:</Text>
          <View style={styles.genreList}>
            {genres.map((genre) => (
              <TouchableOpacity
                key={genre}
                style={styles.modalItem}
                onPress={() => selectGenre(genre)}
              >
                <Text>{genre}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button title="Submit" onPress={handleAddBook} />
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={bookTitle}
        onChangeText={setBookTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={bookAuthor}
        onChangeText={setBookAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Pages"
        value={bookPages}
        onChangeText={setBookPages}
        keyboardType="numeric"
      />

      <View style={styles.booksList}>
        {books.map((book, index) => (
          <Text key={index}>{`${book.title} by ${book.author}, Genre: ${book.genre}, Pages: ${book.pages}`}</Text>
        ))}
      </View>

      <Text>Total Pages Read: {totalReadPages}</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: 'lightblue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
  genreList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalItem: {
    backgroundColor: 'white',
    padding: 10,
    width: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  booksList: {
    marginTop: 20,
  },
});

export default HomeScreen;
