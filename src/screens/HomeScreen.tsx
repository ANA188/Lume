import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';


const BOOKS = [
  { id: '1', title: 'O Silmarillion', author: 'J.R.R. Tolkien' },
  { id: '2', title: '1984', author: 'George Orwell' },
  { id: '3', title: 'Clean Code', author: 'Robert C. Martin' },
  { id: '4', title: 'Dom Casmurro', author: 'Machado de Assis' },
  { id: '5', title: 'Sapiens', author: 'Yuval Noah Harari' },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Lume</Text>
        <SearchBar onSearch={(text) => console.log('Buscando:', text)} />
      </View>


      <ScrollView contentContainerStyle={styles.listContent}>
        <Text style={styles.sectionLabel}>Recentemente adicionados</Text>

        {BOOKS.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            onPress={() => alert(`Clicou em: ${book.title}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default HomeScreen;
