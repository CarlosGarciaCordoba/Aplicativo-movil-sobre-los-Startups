// components/CategoryItem.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({ imageUri, name, routeName }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(routeName);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
  },
};

export default CategoryItem;
