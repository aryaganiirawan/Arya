import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://via.placeholder.com/150', 
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to our app</Text>
      <Text style={styles.subtitle}>Please login to continue to your account.</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        Start our journey
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6e6e6e',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: '80%',
  },
});
