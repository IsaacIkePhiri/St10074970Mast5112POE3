import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Animated, Easing } from 'react-native';
import HomePage from './HomePage';
import BookListScreen from './BookListScreen';
import HistoryScreen from './HistoryScreen';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const fadeAnim = new Animated.Value(0);

  const switchToPage = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Animate the components when the page changes
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [currentPage]);

  return (
    <ImageBackground
      source={require('./ImageBackground/Yellow.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.pageContainer,
            {
              opacity: fadeAnim, // Apply the animation to the page container
            },
          ]}
        >
          {/* Navigation Buttons */}
          <View style={styles.navigation}>
            <Button title="Home" onPress={() => switchToPage('home')} />
            <Button title="Book List" onPress={() => switchToPage('bookList')} />
            <Button title="History" onPress={() => switchToPage('history')} />
          </View>

          {/* Display the Current Page */}
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'bookList' && <BookListScreen />}
          {currentPage === 'history' && <HistoryScreen selectedBooks={[]} />}
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default App;
