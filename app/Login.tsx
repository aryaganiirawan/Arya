import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { loginUser } from '@/services/api';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleSubmit = async () => {
    try {
      const response = await loginUser({ email, password });
      alert(`Login successful! Welcome ${response.data.name}`);
    } catch (error) {
      alert('Login failed. Please check your email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subtitle}>Please login to continue to your account.</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button mode="contained" style={styles.signInButton} onPress={handleSubmit}>
        Sign in
      </Button>

      <Text style={styles.orText}>or</Text>
      <Button mode="outlined" style={styles.googleButton} icon="google">
        Sign in with Google
      </Button>

      <Text style={styles.createAccount}>
        Need an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Create one
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
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
  input: {
    marginBottom: 15,
  },
  signInButton: {
    marginBottom: 15,
  },
  orText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6e6e6e',
    marginVertical: 10,
  },
  googleButton: {
    borderColor: '#007bff',
    borderWidth: 1,
    marginBottom: 15,
  },
  createAccount: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    color: '#6e6e6e',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
