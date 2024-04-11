import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';

const emprendimientos = [
  {
    name: 'Producto 1',
    name2:'$16.000',
    imageUri: 'https://i.pinimg.com/736x/95/31/5a/95315a96f3f1dd7594027f95c4f49070.jpg',
  },
  {
    name: 'Producto 2',
    name2:'$25.000',
    imageUri: 'https://http2.mlstatic.com/D_NQ_NP_730744-MCO54968639616_042023-O.webp',
  },
  {
    name: 'Producto 3',
    name2:'$20.000',
    imageUri: 'https://www.todoparaellas.com/u/fotografias/m/2023/4/19/f608x342-55289_85012_0.png',
  },
];

function MediaScreen() {
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
                  'https://static.wixstatic.com/media/fe43c7_2e9b6f3cbc234682bd474574b4e08429~mv2.jpg/v1/fill/w_749,h_745,al_c,q_85,enc_auto/fe43c7_2e9b6f3cbc234682bd474574b4e08429~mv2.jpg',
              }}
              style={styles.coverImage}
            />
  
            {/* Contenido debajo de la portada */}
            <View style={styles.contentContainer}>
              {/* Texto "perritoskawai" */}
              <Text style={styles.text}>Media Luna</Text>
  
              <View>
                <Text>Media luna es una tienda virtual enfocada en gafas para todos los estilos donde encontrarás diversidad de colores y formas para complementar cada outfit. By:Eva María </Text>
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
                <Text style={styles.contactInfo}>3208494594</Text>
  
                <Text style={styles.contactTitle}>
                  <FontAwesomeIcon icon={faAt} style={styles.icon} />
                  {'  '}
                  Usuario:
                </Text>
                <Text style={styles.contactInfo}>@media.luna0</Text>
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

export default MediaScreen;



