import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';

const emprendimientos = [
  {
    name: 'Ramo de Rosas',
    name2:'$40.000',
    imageUri: 'https://i.pinimg.com/originals/3c/e1/e2/3ce1e23f3ca0095d7e9c65ac97d81f31.jpg',
  },
  {
    name: 'Corazón de Rosas',
    name2:'$30.000',
    imageUri: 'https://i.pinimg.com/550x/e9/53/27/e95327d840b8b663fa715d1525f399ec.jpg',
  },
  {
    name: 'Flor Amarilla',
    name2:'$60.000',
    imageUri: 'https://www.desayunossorpresabogota.co/pub/media/catalog/product/cache/14c6d899efe7e66197022deeb0e46814/p/r/preservada_amarilla_3.jpg',
  },
];

function Jeans() {
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
                  'https://rosestolove.com/mundo-luxury2/wp-content/uploads/2020/03/comprar-rosas-eternas.jpg',
              }}
              style={styles.coverImage}
            />
  
            {/* Contenido debajo de la portada */}
            <View style={styles.contentContainer}>
              {/* Texto "perritoskawai" */}
              <Text style={styles.text}>Flowers</Text>
  
              <View>
                <Text>¡Bienvenido a Flowers, tu destino para flores personalizadas y hechas a mano! En nuestro encantador local virtual, cada ramo es una obra de arte única, cuidadosamente confeccionada para expresar tus emociones y celebrar momentos especiales. </Text>
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
                <Text style={styles.contactInfo}>32839283</Text>
  
                <Text style={styles.contactTitle}>
                  <FontAwesomeIcon icon={faAt} style={styles.icon} />
                  {'  '}
                  Correo:
                </Text>
                <Text style={styles.contactInfo}>flowers@gmail.com</Text>
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

export default Jeans;