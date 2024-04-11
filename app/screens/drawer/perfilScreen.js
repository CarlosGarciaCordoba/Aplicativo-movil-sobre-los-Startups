import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { profilePicture2 } from 'E:/ProyectodeGrado2/moviles/App';

const PerfilScreen = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Perfil');
  };

  const handleStartupsPress = () => {
    navigation.navigate('emprendimientos');
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1700169752~exp=1700170352~hmac=e96491fd1b974b5e33ba497f2d085faee8deecff5c444e9b8f527f3ce290f73e',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleProfilePress}>
            <Image source={profilePicture2} style={styles.profileImage} />
          </TouchableOpacity>
          <Text style={styles.profileName}>Carlos_Garcia</Text>
          <Text style={styles.profileText}>
            <Text style={styles.label}>Nombre:</Text> Carlos Alberto García Córdoba
          </Text>
          <Text style={styles.profileText}>
            <Text style={styles.label}>Telefono:</Text> 3212833963
          </Text>
          <Text style={styles.profileText}>
            <Text style={styles.label}>Correo:</Text> cagarciacordoba@uts.edu.co
          </Text>

          {/* Botón dentro de la caja blanca */}
          <Button
            mode="contained"
            onPress={handleStartupsPress}
            labelStyle={{ fontSize: 16 }}
            style={styles.startupsButton}
          >
            Mis startups
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    backgroundColor: 'white',
    paddingVertical: 20, // Padding arriba y abajo
    paddingHorizontal: 2, // Padding izquierda y derecha
    borderRadius: 10,
    alignItems: 'center', // Alinea el texto a la izquierda
    marginBottom: 50,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 20,
    marginTop: 20,
    color: '#52EA06',
  },
  profileText: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
    textAlign: 'justify',
  },
  label: {
    color: '#52EA06',
  },
  startupsButton: {
    marginTop: 20,
    backgroundColor: '#52EA06',
    borderRadius: 5,
  },
};

export default PerfilScreen;
