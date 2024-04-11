import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';

const emprendimientos = [
  {
    name: 'Empanadas de Pollo',
    name2:'$5000',
    imageUri: 'https://images.hola.com/imagenes/cocina/recetas/20220420208317/empanadas-venezolanas-pollo/1-76-739/pollo-empa-adobe-t.jpg',
  },
  {
    name: 'Empanadas de Carne',
    name2:'$4500',
    imageUri: 'https://familiakitchen.com/wp-content/uploads/2021/09/Empanadas-open-e1631296397215.jpg',
  },
  {
    name: 'Papa Rellena',
    name2:'$6000',
    imageUri: 'https://www.elespectador.com/resizer/qk24MDmUNBNMZuyoGac8UYZZ2Sw=/968x645/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/4YMEEW2QBVGALOUC7LSPUFNKMU.jpg',
  },
];

function Picasso() {
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozmHG9wXSNL8TqpzznS8mAps0RsJTe-wRMw&usqp=CAU',
              }}
              style={styles.coverImage}
            />
  
            {/* Contenido debajo de la portada */}
            <View style={styles.contentContainer}>
              {/* Texto "perritoskawai" */}
              <Text style={styles.text}>Empanadas Conucos</Text>
  
              <View>
                <Text>Empanadas Conucos: Deliciosas y auténticas empanadas, rellenas de sabores tradicionales, en un ambiente acogedor y familiar.</Text>
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
                <Text style={styles.contactInfo}>6909993</Text>
  
                <Text style={styles.contactTitle}>
                  <FontAwesomeIcon icon={faAt} style={styles.icon} />
                  {'  '}
                  Usuario:
                </Text>
                <Text style={styles.contactInfo}>empanadasconucos</Text>
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

export default Picasso;