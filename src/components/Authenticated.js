import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import React from 'react'

const Authenticated = ({ user, handleHome ,handleAuthentication }) => {
    return (
   
      <View style={styles.authContainer}>
        <Text style={styles.title}>Hoşgeldin</Text>
        <Text style={styles.emailText}>{user.email}</Text>
        <View style={styles.buttonContainer}>
        <Button title="Ana sayfaya git" onPress={handleHome} color="#0000FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Çıkış Yap" onPress={handleAuthentication} color="#e74c3c" />
      </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer:{
    width: '100%',
    marginBottom: 10,
    borderRadius: 25,
    overflow: 'hidden',
  }
});
export default Authenticated