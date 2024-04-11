import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const products = [
  {
    name: 'Producto 1',
    imageUri: 'https://mandolina.co/wp-content/uploads/2023/05/mini-Donas-rellenas-en-Air-Fryer.jpg',
  },
  {
    name: 'Producto 2',
    imageUri: 'https://boquisabroso.com.co/wp-content/uploads/2023/03/Receta-de-Empanadas-Paisas.jpg',
  },
  {
    name: 'Producto 3',
    imageUri: 'https://www.santa-lucia.ec/wp-content/uploads/2014/12/empanadas_mejido.jpg',
  },
];

const EmprendimientosScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1700169752~exp=1700170352~hmac=e96491fd1b974b5e33ba497f2d085faee8deecff5c444e9b8f527f3ce290f73e' }}
        style={styles.imageBackground}
      >
        {/* Información de contacto independiente */}
        <View style={styles.contactBox}>
          <Text style={styles.contactTitle}>¡Contacta al Emprendedor!</Text>
          <Text style={styles.contactLabel}>Nombre:</Text>
          <Text style={styles.contactInfo}>Carlos Alberto García Córdoba</Text>
          <Text style={styles.contactLabel}>Teléfono:</Text>
          <Text style={styles.contactInfo}>3212833963</Text>
          <Text style={styles.contactLabel}>Correo:</Text>
          <Text style={styles.contactInfo}>cagarciacordoba@uts.edu.co</Text>
        </View>

        {/* Mapeo de productos */}
        {products.map((product, index) => (
          <View key={index} style={styles.productBox}>
            <Text style={styles.title}>{product.name}</Text>
            <Image
              source={{ uri: product.imageUri }}
              style={styles.productImage}
              onError={(error) => console.error('Error al cargar la imagen:', error.nativeEvent.error)}
            />
          </View>
        ))}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  productBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 20,
    elevation: 5,
  },
  productImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 15,
  },
  contactBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    elevation: 5,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  contactInfo: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
});

export default EmprendimientosScreen;

