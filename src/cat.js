import React from 'react';
import { Text, View, Image } from 'react-native';



const Cat = () => {
  return (
    <View>
    <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat! These are my friends:</Text>
  </View>
  );
}

export default Cat;