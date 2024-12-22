import axios from 'axios';

const API_URL = 'https://portfolio-five-mocha.vercel.app/api';

// Fungsi untuk register user
export const registerUser = async (data: { name: string; email: string; password: string; confirm_password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    console.log('Registration Response:', response.data);
    return response.data;
  } catch (error: any) {
    // Improved error handling
    const errorMessage = error?.response?.data?.message || error?.message || 'Something went wrong with the registration';
    console.error('Registration Error:', errorMessage);
    throw new Error(errorMessage); // Throwing a more structured error
  }
};

// Fungsi untuk login user
export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    console.log('Login Response:', response.data);
    return response.data;
  } catch (error: any) {
    // Improved error handling
    const errorMessage = error?.response?.data?.message || error?.message || 'Something went wrong with the login';
    console.error('Login Error:', errorMessage);
    throw new Error(errorMessage); // Throwing a more structured error
  }
};
