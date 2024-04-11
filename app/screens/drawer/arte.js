import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView, Animated, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const imagenes = [
  "https://ethic.es/wp-content/uploads/2022/12/vangog-2.jpg",
  "https://cdn.shopify.com/s/files/1/0259/0484/0781/files/fundas-de-celular-para-fechas-especiales.jpg?v=1633410747",
  "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/129823/df51e205acb59158ef00245bbb0442ba729f85d6.XL2.jpg",
  "https://jrpublicidadyestampados.com/wp-content/uploads/2020/03/termos-personalizados-del-futbol.jpg",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_LATERAL = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function BackDrop({ scrollX }) {
  return (
    <View style={[{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0 }, StyleSheet.absoluteFillObject]}>
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const outputRange = [0, 1, 0];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange,
        });

        return (
          <Animated.Image
            source={{ uri: imagen }}
            key={index}
            blurRadius={10}
            style={[{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0, opacity }]}
          />
        );
      })}

      <LinearGradient colors={["transparent", "white"]} style={{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0 }} />
    </View>
  );
}

function ArteScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/vector-gratis/vector-marco-fondo-fluido-verde_53876-162336.jpg?w=740&t=st=1697235891~exp=1697236491~hmac=ac8f9b2ecb7d9ecdaa0982ae9d1e82d5947c72113351e3a8e3b2ce12e799b1d8' }}
        style={styles.background}
      >
        <BackDrop scrollX={scrollX} />
        <Animated.FlatList
          data={imagenes}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 200, paddingHorizontal: ESPACIO_LATERAL }}
          decelerationRate={0}
          snapToInterval={ANCHO_CONTENEDOR}
          scrollEventThrottle={16}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];

            const outputRange = [0, -50, 0];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange,
            });

            return (
              <View style={{ width: ANCHO_CONTENEDOR }}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 34,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY }],
                  }}
                >
                  <Image source={{ uri: item }} style={styles.posterImage} />
                </Animated.View>
              </View>
            );
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

export default ArteScreen;
