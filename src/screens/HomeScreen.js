import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import CategoryData from '../data/CategoryData';
import { useLikedPerfumes } from '../contexts/LikedPerfumesContext';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const { likedPerfumes, setLikedPerfumes } = useLikedPerfumes();
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredData([]);
    } else {
      const queryLowerCase = query.toLowerCase();
      const filtered = CategoryData.flatMap((category) =>
        category.perfumes
          .filter((perfume) =>
            perfume.name.toLowerCase().includes(queryLowerCase) || perfume.notes.toLowerCase().includes(queryLowerCase)
          )
          .map((perfume) => ({ ...perfume, categoryTitle: category.title, image: perfume.image }))
      );

      setFilteredData(filtered);
    }
  };

  const handleLike = (perfume) => {
    setLikedPerfumes((prev) => {
      if (prev.some((item) => item.name === perfume.name)) {
        return prev.filter((item) => item.name !== perfume.name);
      } else {
        return [...prev, perfume];
      }
    });
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CategoryDetail', { category: item })}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderPerfumeItem = ({ item }) => (
    <View style={styles.perfumeCard}>
      <Image source={item.image} style={styles.perfumeImage} />
      <Text style={styles.perfumeName}>{item.name}</Text>
      <Text style={styles.perfumeNotes}>{item.notes}</Text>
      <TouchableOpacity onPress={() => handleLike(item)}>
        <Text style={likedPerfumes.some((perfume) => perfume.name === item.name) ? styles.unlikeButton : styles.likeButton}>
          {likedPerfumes.some((perfume) => perfume.name === item.name) ? 'Unlike' : 'Like'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../image/ProfileIcon.jpg')} style={styles.profileImage} />
      </TouchableOpacity>
      <Text style={styles.header}>Kategoriler</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Kokunu arat..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {searchQuery.trim() === '' ? (
        <FlatList
          data={CategoryData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderPerfumeItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 1,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  perfumeCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  perfumeImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  perfumeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  perfumeNotes: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  likeButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 8,
  },
  unlikeButton: {
    fontSize: 18,
    color: 'red',
    marginTop: 8,
  },
});

export default HomeScreen;
