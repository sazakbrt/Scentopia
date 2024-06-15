import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useLikedPerfumes } from '../contexts/LikedPerfumesContext';

const CategoryDetailScreen = ({ route }) => {
  const { category } = route.params;
  const { likedPerfumes, setLikedPerfumes } = useLikedPerfumes();

  const handleLike = (perfume) => {
    setLikedPerfumes((prev) => {
      if (prev.some((item) => item.name === perfume.name)) {
        return prev.filter((item) => item.name !== perfume.name);
      } else {
        return [...prev, perfume];
      }
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.perfumeItem}>
      <Image source={item.image} style={styles.perfumeImage} />
      <Text style={styles.perfumeName}>{item.name}</Text>
      <Text style={styles.perfumeNotes}>{item.notes}</Text>
      <TouchableOpacity onPress={() => handleLike(item)}>
        <Text style={styles.likeButton}>{likedPerfumes.some((perfume) => perfume.name === item.name) ? 'Unlike' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category.title}</Text>
      <FlatList
        data={category.perfumes}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  perfumeItem: {
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
});

export default CategoryDetailScreen;
