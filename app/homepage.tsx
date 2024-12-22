import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Gambar Vektor */}
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/201/201818.png', // Gambar vektor mahasiswa
        }}
        style={styles.image}
      />

      {/* Informasi Data Diri */}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Informasi Data Diri</Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Nama: </Text> Arya Gani Irawan
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Alamat: </Text> Jl.Merak, Jakarta
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Umur: </Text> 17 Tahun
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Jurusan: </Text> Manajemen Informatika
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Nama Kampus: </Text> Politektik Lp3i Jakarta
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>UAS: </Text> Mobile Programming
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});
