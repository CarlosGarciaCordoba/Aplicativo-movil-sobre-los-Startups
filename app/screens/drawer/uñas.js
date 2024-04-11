import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';

const emprendimientos = [
  {
    name: 'Jordan Amarillas',
    name2:'$400.000',
    imageUri: 'https://hips.hearstapps.com/hmg-prod/images/guest-wears-yellow-shiny-leather-large-pants-yellow-and-news-photo-1689934418.jpg?crop=1xw:0.84364xh;center,top&resize=1200:*',
  },
  {
    name: 'Court Vision',
    name2:'$300.000',
    imageUri: 'https://f.fcdn.app/imgs/53ff66/www.globalsports.com.uy/gls/b3d2/original/catalogo/NKDH2987-107-1/1500-1500/nike-court-vision-low-next-nature-white.jpg',
  },
  {
    name: 'Blue Jordan',
    name2:'$400.000',
    imageUri: 'https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2F17f2399f270c20a3a2d61c6e73ef7d83%2F5a52f2d0-cb3a-11ec-a365-8b07971b29c2?alt=media&token=78553af0-59ea-4005-afcb-8574415494f5',
  },
];

function Uñas() {
    return (
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={{
            uri: 'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1700169752~exp=1700170352~hmac=e96491fd1b974b5e33ba497f2d085faee8deecff5c444e9b8f527f3ce290f73e', // Cambia esto con la URL de tu imagen de fondo
          }}
          style={styles.imageBackground}
        >
          <View style={styles.container}>
            {/* Imagen de portada en la parte superior */}
            <Image
              source={{
                uri:
                  'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/06/16/16869010428768.jpg',
              }}
              style={styles.coverImage}
            />
  
            {/* Contenido debajo de la portada */}
            <View style={styles.contentContainer}>
              {/* Texto "perritoskawai" */}
              <Text style={styles.text}>Nike</Text>
  
              <View>
                <Text>¡Bienvenido a nuestro exclusivo local de calzado Nike! Sumérgete en el mundo de la innovación y el estilo deportivo con nuestra amplia selección de zapatillas y calzado de la icónica marca Nike</Text>
              </View>
  
              <View>
                <Text></Text>
              </View>
              {/* Información de contacto con iconos */}
              <View style={styles.contactContainer}>
                <Text style={styles.contactTitle}>
                  <FontAwesomeIcon icon={faPhone} style={styles.icon} />
                  {'  '}
                  Teléfono:
                </Text>
                <Text style={styles.contactInfo}>5454545454</Text>
  
                <Text style={styles.contactTitle}>
                  <FontAwesomeIcon icon={faAt} style={styles.icon} />
                  {'  '}
                  Correo:
                </Text>
                <Text style={styles.contactInfo}>nike@gmail.com</Text>
              </View>
  
              {/* Cajas con nombre e imagen en disposición vertical */}
              <View style={styles.emprendimientosContainer}>
                {emprendimientos.map((emprendimiento, index) => (
                  <View key={index} style={styles.emprendimientoBox}>
                    <Text style={styles.emprendimientoName}>{emprendimiento.name}</Text>
                    <Image
                      source={{ uri: emprendimiento.imageUri }}
                      style={styles.emprendimientoImage}
                    />
                    <Text style={styles.emprendimientoName}>{emprendimiento.name2}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactContainer: {
    marginBottom: 10,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  icon: {
    fontSize: 18,
    textAlign: 'center',
  },
  emprendimientosContainer: {
    flexDirection: 'column', // Cambiado de 'row' a 'column'
    alignItems: 'center',
  },
  emprendimientoBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 20,
    elevation: 5,
  },
  emprendimientoImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 15,
  },
  emprendimientoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
});

export default Uñas;