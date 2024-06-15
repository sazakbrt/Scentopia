import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useLikedPerfumes } from '../contexts/LikedPerfumesContext';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const { likedPerfumes, setLikedPerfumes } = useLikedPerfumes();
  const [userEmail, setUserEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return unsubscribe;
  }, []);

  const handleUnlike = (perfume) => {
    setLikedPerfumes((prev) => prev.filter((item) => item.name !== perfume.name));
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigation.navigate('Auth');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.perfumeItem}>
      <Image source={item.image} style={styles.perfumeImage} />
      <Text style={styles.perfumeName}>{item.name}</Text>
      <Text style={styles.perfumeNotes}>{item.notes}</Text>
      <TouchableOpacity onPress={() => handleUnlike(item)}>
        <Text style={styles.unlikeButton}>Unlike</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profil</Text>
      <Text style={styles.emailText}>{userEmail}</Text>
      <Text style={styles.header}>Beğenilen Parfümler</Text>
      <FlatList
        data={likedPerfumes}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>
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
  emailText: {
    fontSize: 27,
    marginVertical: 16,
    textAlign: 'center',
    color: '#555',
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
  unlikeButton: {
    fontSize: 18,
    color: 'red',
    marginTop: 8,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
