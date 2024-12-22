import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setData, resetData } from '../store/reducer/loginReducer';
import { useRouter } from 'expo-router';
import { registerUser } from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Pastikan style toastify diimpor

const Register = () => {
  const registerForm = useSelector((state: any) => state.login) || {};
  const dispatch = useDispatch();
  const router = useRouter();

  const onChangeValue = (field: string, value: string) => {
    dispatch(setData({ [field]: value }));
  };

  const onSaveData = async () => {
    try {
      // Cek jika password dan confirm password cocok
      if (registerForm.password !== registerForm.confirm_password) {
        toast.error("Passwords do not match!");  // Notifikasi dengan toastify
        return;
      }

      const { data } = await registerUser(registerForm);

      toast.success("Register Success");  // Notifikasi sukses

      dispatch(resetData());
      router.push('/Login');
    } catch (error: any) {
      const msg = error?.response?.data?.message || error?.message || 'Something went wrong';
      toast.error(msg);  // Notifikasi error
    }
  };

  const routeBack = () => {
    router.push('/Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Sign up to enjoy the features of Revolutie</Text>

      <TextInput
        label="Your Name"
        mode="outlined"
        value={registerForm.name || ''}
        onChangeText={(value) => onChangeValue('name', value)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={registerForm.email || ''}
        onChangeText={(value) => onChangeValue('email', value)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={registerForm.password || ''}
        onChangeText={(value) => onChangeValue('password', value)}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        mode="outlined"
        value={registerForm.confirm_password || ''}
        onChangeText={(value) => onChangeValue('confirm_password', value)}
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" style={styles.signUpButton} onPress={onSaveData}>
        Sign up
      </Button>

      <Text style={styles.orText}>or</Text>
      <Button mode="outlined" style={styles.googleButton} icon="google">
        Continue with Google
      </Button>

      <Text style={styles.alreadyAccount}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={routeBack}>
          Sign in
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
  signUpButton: {
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
  alreadyAccount: {
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

export default Register;
