import { Stack } from 'expo-router';
import store from '../store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Jangan lupa import CSS untuk Toastify

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Stack>
        <Stack.Screen name="homepage" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
