import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, Alert, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';

function AjustesScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [notificaciones, setNotificaciones] = useState(true);
  const [modoNocturno, setModoNocturno] = useState(false);
  const [idioma, setIdioma] = useState('Español');
  const [tamañoTexto, setTamañoTexto] = useState('Normal');
  const [privacidad, setPrivacidad] = useState(true);
  const [tema, setTema] = useState('Predeterminado');
  const [modoAccesibilidad, setModoAccesibilidad] = useState(false);

  const handleChangePassword = async () => {
    try {
      const user = getAuth().currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setCurrentPassword('');
      setNewPassword('');
      Alert.alert('Contraseña cambiada con éxito');
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error.message);
      Alert.alert('Error al cambiar la contraseña', error.message);
    }
  };

  const toggleNotificaciones = () => {
    setNotificaciones((prevState) => !prevState);
  };

  const toggleModoNocturno = () => {
    setModoNocturno((prevState) => !prevState);
  };

  const togglePrivacidad = () => {
    setPrivacidad((prevState) => !prevState);
  };

  const toggleModoAccesibilidad = () => {
    setModoAccesibilidad((prevState) => !prevState);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1700169752~exp=1700170352~hmac=e96491fd1b974b5e33ba497f2d085faee8deecff5c444e9b8f527f3ce290f73e' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>Ajustes</Text>

          <View style={styles.ajusteItem}>
            <Text>Recibir notificaciones</Text>
            <Switch value={notificaciones} onValueChange={toggleNotificaciones} />
          </View>

          <View style={styles.ajusteItem}>
            <Text>Modo Nocturno</Text>
            <Switch value={modoNocturno} onValueChange={toggleModoNocturno} />
          </View>

          <View style={styles.ajusteItem}>
            <Text>Idioma</Text>
            <Picker
              selectedValue={idioma}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue) => setIdioma(itemValue)}
            >
              <Picker.Item label="Español" value="Español" />
              <Picker.Item label="Inglés" value="Inglés" />
              <Picker.Item label="Alemán" value="Alemán" />
            </Picker>
          </View>

          <View style={styles.ajusteItem}>
            <Text>Tamaño del Texto</Text>
            <Picker
              selectedValue={idioma}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue) => setTamañoTexto(itemValue)}
            >
              <Picker.Item label="Arial" value="Arial" />
              <Picker.Item label="Time" value="Time" />
              <Picker.Item label="Colibri" value="Colibri" />
            </Picker>
          </View>

          <View style={styles.ajusteItem}>
            <Text>Privacidad</Text>
            <Switch value={privacidad} onValueChange={togglePrivacidad} />
          </View>

          <View style={styles.ajusteItem}>
            <Text>Tema de la Aplicación</Text>
            <Text>{tema}</Text>
          </View>

          <View style={styles.ajusteItem}>
            <Text>Modo de Accesibilidad</Text>
            <Switch value={modoAccesibilidad} onValueChange={toggleModoAccesibilidad} />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Cambiar Contraseña</Text>
          </TouchableOpacity>

          <View style={styles.ajusteItem}>
            <Text>Contraseña Actual</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 150 }}
              secureTextEntry
              onChangeText={(text) => setCurrentPassword(text)}
              value={currentPassword}
            />
          </View>

          <View style={styles.ajusteItem}>
            <Text>Nueva Contraseña</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 150 }}
              secureTextEntry
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Cambiar Contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    backgroundColor: 'white', // Caja blanca de fondo
    padding: 20,
    borderRadius: 10,
    opacity: 0.9,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ajusteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#45C903', // Puedes cambiar el color del fondo del botón
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center', // Alinea el texto al centro
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AjustesScreen;

