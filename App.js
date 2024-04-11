import React,{useState}  from 'react';
import {Image,Text,StyleSheet,View,ScrollView,TouchableOpacity,TextInput,Button,Alert,StatusBar,Dimensions, ImageBackground, Animated} from 'react-native';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp} from 'firebase/app';
import { firebaseConfig } from './fireBaseConfig';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator} from '@react-navigation/drawer';
import { SearchBar } from 'react-native-elements';
import AjustesScreen from './app/screens/drawer/ajustes';
import ComidaScreen from './app/screens/drawer/comida';
import RopaScreen from './app/screens/drawer/ropa';
import ArteScreen from './app/screens/drawer/arte';
import BisuteriaScreen from './app/screens/drawer/bisuteria';
import PerfilScreen from './app/screens/drawer/perfilScreen';
import PerroScreen from './app/screens/drawer/Media';
import Picasso from './app/screens/drawer/picasso';
import Uñas from './app/screens/drawer/uñas';
import Jeans from './app/screens/drawer/jeans';
import EmprendimientosScreen from './app/screens/drawer/emprendimientos';
import Icon from 'react-native-vector-icons/FontAwesome';// Puedes cambiar 'FontAwesome' por el conjunto de iconos que prefieras
import { Grid, Row } from 'react-native-easy-grid';
import { LinearGradient } from 'expo-linear-gradient';
import MediaScreen from './app/screens/drawer/Media';
import { CheckBox } from 'react-native-elements';


const uri= 'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1697235891~exp=1697236491~hmac=ac8f9b2ecb7d9ecdaa0982ae9d1e82d5947c72113351e3a8e3b2ce12e799b1d8';
 export const profilePicture = require('./assets/mystartuplogo.jpeg');
 export const profilePicture2= require('./assets/meliodas.jpg');
const urii= 'https://i.ytimg.com/vi/8xcGwLUxnJE/maxresdefault.jpg';

const images = [
  'https://i.pinimg.com/originals/e8/fa/18/e8fa182e1dfb25e3cb3d3e12957fc9dd.jpg',
  'https://images.rappi.com.mx/restaurants_background/1e6821eb-2693-49e4-a7b8-a59aa5ad8658-1645226753574.png',
  'https://magazine.velasresorts.com/wp-content/uploads/2022/12/refreshing-drink-with-beer-candy-jelly-bear-marshmallow-1024x836.jpg',
  'https://www.santa-lucia.ec/wp-content/uploads/2014/12/empanadas_mejido.jpg',
  'https://boquisabroso.com.co/wp-content/uploads/2023/03/Receta-de-Empanadas-Paisas.jpg',
  'https://mandolina.co/wp-content/uploads/2023/05/mini-Donas-rellenas-en-Air-Fryer.jpg',
  'https://i.ytimg.com/vi/8xcGwLUxnJE/maxresdefault.jpg'
  
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const categories = [
  { title: 'Comidas', image: 'https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg', route: 'Comida' },
  { title: 'Ropa', image: 'https://i3w3g8c7.rocketcdn.me/wp-content/uploads/2016/07/Plan-de-marketing-f%C3%A1cil-para-una-tienda-de-ropa.png', route: 'Ropa' },
  { title: 'Arte', image: 'https://img.freepik.com/vector-premium/paleta-colores-arte-herramientas-dibujo-pincel_346903-1267.jpg?w=2000', route: 'Arte' },
  { title: 'Bisuteria', image: 'https://cdn.quicksell.co/-MpfqSELDsRr_mgVGtm_/products/-N5rZFBg8vvnCM2eHbM_.jpg', route: 'Bisuteria' },
  
  // Agrega más categorías aquí
];


const horizontalBoxes = [
  { title: 'Media luna', image2: 'https://cdn.shopify.com/s/files/1/0269/7828/7687/files/lentes_de_sol_para_mujer_aesthetic_10_y_oftalmicos.png?v=1668610795', route: 'Media' },
{ title: 'Empanadas Conucos', image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozmHG9wXSNL8TqpzznS8mAps0RsJTe-wRMw&usqp=CAU', route: 'Picasso' },
{ title: 'Nike', image2: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/06/16/16869010428768.jpg', route: 'Uñas' },
{ title: 'Flowers', image2: 'https://rosestolove.com/mundo-luxury2/wp-content/uploads/2020/03/comprar-rosas-eternas.jpg', route: 'Jeans' },
];

const Slider = [
{ image2: 'https://doñarepa.com/wp-content/uploads/2018/04/empanadas_valle.jpg', route: 'Comida' },
{ image2: 'https://www.portafolio.co/files/article_new_multimedia/uploads/2022/04/12/6255e2e41db6c.jpeg', route: 'Comida' },
{ image2: 'https://boquisabroso.com.co/wp-content/uploads/2023/02/Receta-de-Perros-Calientes.jpg', route: 'Comida' },
{ image2: 'https://i.ytimg.com/vi/zFtO0QR2TQo/maxresdefault.jpg', route: 'Comida' },
{ image2: 'https://www.elpais.com.co/resizer/WHIqYAGy3I5U5-bCqP1wo8QDHSI=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/N5KA5S3L4BF5NOUXKPKQR42OVE.jpg', route: 'Comida' },
{ image2: 'https://www.amexessentials.com/wp-content/uploads/2018/06/Jessica-Gavin-Opener-Popsicles-2.jpg', route: 'Comida' },
{ image2: 'https://radionacional-v3.s3.amazonaws.com/s3fs-public/node/article/field_image/CHOCO_0.jpg', route: 'Comida' },
{ image2: 'https://www.dondeir.com/wp-content/uploads/2023/05/micheladas-kokin-iztapalapa-1-1.jpg', route: 'Comida' },
{ image2: 'https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg', route: 'Ropa' },
{ image2: 'https://phantom-marca.unidadeditorial.es/aa67e69d361f507bec17a371663e32f5/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/29/16932959763513.jpg', route: 'Ropa' },
{ image2: 'https://haby.com.co/cdn/shop/collections/NUEVA_COLECCION-LANDING-4_1400x.jpg?v=1668533894', route: 'Ropa' },
{ image2: 'https://phonetify.com.co/wp-content/uploads/2021/03/banner-personalizados.gif', route: 'Arte' },
{ image2: 'https://http2.mlstatic.com/D_NQ_NP_722469-MCO46434423004_062021-O.webp', route: 'Arte' },
{ image2: 'https://www.bellthstore.com/cdn/shop/files/IMG-20231003_193232_498.webp?v=1696463963&width=1445', route: 'Arte' },
{ image2: 'https://picnic.media/wp-content/uploads/2021/06/PORTADA-1140x700.jpg', route: 'Arte' },
{ image2: 'https://delavallelatienda.com.co/wp-content/uploads/2021/02/SET-MANILLAS-COLOMBIANA.jpg', route: 'Bisuteria' },
{ image2: 'https://cdnx.jumpseller.com/menina/image/30222798/COLLAR_MOSTACILLA_OAJARO.jpeg?1670973569', route: 'Bisuteria' },
{ image2: 'https://turquesaaccesorios.com/wp-content/uploads/2022/12/IMG_0422.jpg', route: 'Bisuteria' },
{ image2: 'https://http2.mlstatic.com/D_NQ_NP_609690-MCO54202042729_032023-O.webp', route: 'Bisuteria' },
{ image2: 'https://img.freepik.com/fotos-premium/vibrantes-bolsos-hechos-mano-centro-comercial_145644-48723.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699315200&semt=ais', route: 'Bisuteria' },
];


function HomeScreen({ navigation }) {
  const handleCategoryPress = (route) => {
    // Navega a la pestaña correspondiente cuando se toca una categoría
    navigation.navigate(route);
  };

  const [searchText, setSearchText] = React.useState('');
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };



  const [imgActive, setImgActive] = useState(0);
  const handleImagePress = () => {
    // Navega a la pestaña de comida cuando se presiona la imagen
    navigation.navigate('Comida');
    navigation.navigate('Ropa');
    navigation.navigate('Arte');
    navigation.navigate('Bisuteria');
    navigation.navigate('Media');
    navigation.navigate('Picasso');
    navigation.navigate('Uñas');
    navigation.navigate('Jeans');
  };

  return(

    //cambio en el safe area
    
    <ScrollView style={styles.container}>
    <ImageBackground source={{ uri }} style={styles.image}>
      <View style={styles.wrap}>
        <SearchBar
          placeholder="Buscar..."
          onChangeText={handleSearchTextChange}
          value={searchText}
          platform="default"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
        />
      </View>
      <View style={styles.horizontalBoxesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollCategories}
        >
          {Slider.map((categoryy, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.horizontalBox, { marginLeft: index > 0 ? 10 : 0 }]} // Agrega margen solo a partir del segundo elemento
              onPress={() => handleCategoryPress(categoryy.route)}
            >
              <Image source={{ uri: categoryy.image2 }} style={styles.categoryImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => handleCategoryPress(category.route)}
          >
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>


      <View style={styles.horizontalBoxesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollCategories}
        >
          {horizontalBoxes.map((categoryy, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.horizontalBox, { marginLeft: index > 0 ? 10 : 0 }]} // Agrega margen solo a partir del segundo elemento
              onPress={() => handleCategoryPress(categoryy.route)}
            >
              <Image source={{ uri: categoryy.image2 }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{categoryy.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      </ImageBackground>
    </ScrollView>
    

  );
        };


function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false); // Estado para el checkbox de términos y condiciones
  const [authorizeData, setAuthorizeData] = React.useState(false); // Estado para el checkbox de autorización de datos
  const navigation = useNavigation();
        
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
        
  const [userLoggedIn, setUserLoggedIn] = useState(false);
        
  const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!');
        const user = userCredential.user;
          console.log(user);
          })
        .catch((error) => {
            console.log(error);
            Alert.alert(error.message);
            });
        };

const handleSignIn = () => {
    if (!acceptTerms || !authorizeData) {
      Alert.alert('Debe aceptar los términos y condiciones, y autorizar el uso de datos personales');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Sign In!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('MainDrawer');
        setUserLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('ERROR: usuario y/o contraseña incorrecto');
      });
  };

  // Funciones para cambiar el estado de los checkbox
  const toggleAcceptTerms = () => setAcceptTerms(!acceptTerms);
  const toggleAuthorizeData = () => setAuthorizeData(!authorizeData);
  
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.login}>
          <Image source={profilePicture} style={{ ...styles.profilePicture, width: 320, height: 100 }} /> 
          <View>
           <Text style={{fontSize:17, fontWeight:'400',color:'#45C903'}}>Correo: </Text>
           <TextInput  onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder='Ingresa tu correo'/>
          </View>
  
          <View>
           <Text style={{fontSize:17, fontWeight:'400',color:'#45C903'}}>Password </Text>
           <TextInput onChangeText={(text)=>setPassword(text)} style={styles.input} placeholder='Ingresa tu contraseña' secureTextEntry={true}/>
          </View>
          <TouchableOpacity onPress={handleSignIn} style={[styles.button,{backgroundColor:'#45C903'}]}>
          <Text style={{fontSize:17, fontWeight:'400',color:'white'}}>Login</Text>
  
            </TouchableOpacity>
  
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button,{backgroundColor:'#45C903'}]}>
          <Text style={{fontSize:17, fontWeight:'400',color:'white'}}>Crear cuenta</Text>
  
            </TouchableOpacity>
            <View>
            <CheckBox
              title="Aceptar Términos y Condiciones"
              checked={acceptTerms}
              onPress={toggleAcceptTerms}
            />
          </View>

          <View>
            <CheckBox 
              title="Autorizar el uso de mis datos personales"
              checked={authorizeData}
              onPress={toggleAuthorizeData}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function LogoutScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1700169752~exp=1700170352~hmac=e96491fd1b974b5e33ba497f2d085faee8deecff5c444e9b8f527f3ce290f73e' }} // Reemplaza 'URL_DE_TU_IMAGEN_DE_FONDO' con la URL de tu imagen
      style={styles.backgroundImage}
    >
      <View style={styles.logoutcontainer}>
        <Text style={styles.logoutText}>¿Estás seguro de que deseas cerrar sesión?</Text>
        <Button title="Cerrar sesión" onPress={handleLogout} color="#4FDE07" />
      </View>
    </ImageBackground>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">

<Drawer.Screen 
        name="Perfil" // Cambia el nombre de la entrada a "Perfil"
        component={PerfilScreen}
        options={({ navigation }) => ({ // Utiliza options para personalizar la entrada
          drawerLabel: () => ( // Utiliza una función para personalizar el contenido
            <View style={styles.profileContainer}>
              <Image source={profilePicture2} style={styles.profileImage} />
              <Text style={styles.profileName}>Carlos_Garcia</Text>
            </View>
          ),
        })}
      />

      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> // Cambia 'home' por el nombre del icono que desees
          ),
        }}
      />
      <Drawer.Screen 
        name="Ajustes" 
        component={AjustesScreen} 
        options={{
          drawerLabel: 'Ajustes',
          drawerIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} /> // Cambia 'cog' por el nombre del icono de ajustes que desees
          ),
        }}
      />
      <Drawer.Screen 
        name="Cerrar Sesión" 
        component={LogoutScreen} 
        options={{
          drawerLabel: 'Cerrar Sesión',
          drawerIcon: ({ color, size }) => (
            <Icon name="sign-out" color={color} size={size} /> // Cambia 'sign-out' por el nombre del icono de logout que desees
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


export default function App() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  // Ocultar la barra de estado
  StatusBar.setHidden(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userLoggedIn ? "MainDrawer" : "Login"}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="Comida" component={ComidaScreen} options={{ headerShown: true }} /> 
        <Stack.Screen name="Ropa" component={RopaScreen} options={{ headerShown: true }} /> 
        <Stack.Screen name="Arte" component={ArteScreen} options={{ headerShown: true }} /> 
        <Stack.Screen name="Bisuteria" component={BisuteriaScreen} options={{ headerShown: true }} /> 
        <Stack.Screen name="emprendimientos" component={EmprendimientosScreen} />
        <Stack.Screen name="Media" component={MediaScreen} options={{ headerShown: true }} /> 
        <Stack.Screen name="Picasso" component={Picasso} options={{ headerShown: true }} /> 
        <Stack.Screen name="Uñas" component={Uñas} options={{ headerShown: true }} /> 
        <Stack.Screen name="Jeans" component={Jeans} options={{ headerShown: true }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
container:{
backgroundColor: '#fff',
flex: 1,

},

image:{
width: '100%',
height: '100%',
resizeMode: 'cover',

},
login:{

width:350,
height: 620,
padding:10,
alignItems:'center',


},

profilePicture:{
  width: '90%',
  height: '30%',
  borderRadius:20,
  borderColor:'#45C903',
  borderWidth:1,
  marginVertical:30
},

profilePicture2:{
  width: '90%',
  height: '30%',
  borderRadius:20,
  borderColor:'#45C903',
  borderWidth:1,
  marginVertical:30
},

input:{
width: 250,
height:40,
borderColor:'#45C903',
borderWidth:2,
borderRadius:10,
padding:10,
marginVertical:10,
backgroundColor: '#ffffff90',
marginBottom:20

},

button:{

width:250,
height:40,
borderRadius:10,
alignItems:'center',
justifyContent:'center',
marginVertical:10,
borderWidth:1

},

containerr:{
  flex:1
  },
  
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    marginBottom: 0, // Ajusta según tus necesidades
  },
  
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActivate:{
  margin:2,
  color:'white',
  
  
  },
  
  dot:{
  margin:2,
  color:'#888',
  
  
  },

  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#fff', // Ajusta el fondo de la barra de búsqueda
  },

  comidaImage: {
    width: '70%',
  height: '60%',
  resizeMode: 'cover',
  marginBottom: 10, // Agregar espacio inferior
  alignSelf: 'center'// Centrar horizontalmente
  },
  comidaText: {
    fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center', // Centrar horizontalmente
  marginTop: 4 // Centrar horizontalmente
  },

  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
    flexGrow: 1,
  },
  categoryItem: {
    width: (WIDTH - 30) / 2, // Divide el ancho de la pantalla en dos columnas con margen
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  categoryImage: {
    width: '100%',
    height: 150,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  scrollCategories: {
    maxHeight: 400, // Ajusta la altura máxima del ScrollView según tu diseño
  },

  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoutcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semi-transparente blanco
    padding: 20,
  },
  logoutText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  
  swiperImage: {
    width: '30%', // Ajusta según tus necesidades
    height: '30%', // Ajusta según tus necesidades
    resizeMode: 'cover', // Ajusta según tus necesidades
  },
  horizontalBoxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
    flexGrow: 1,
  },
  
  horizontalBox: {
    width: 360, // Divide el ancho de la pantalla en dos columnas con margen
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  horizontalBoxImage: {
    width: '100%',
    height: 200,

  },

  horizontalBoxText: {
    marginTop: 5, // Espacio entre la imagen y el texto
    fontSize: 12, // Ajusta según tus necesidades
    textAlign: 'center',
  },
  
});



