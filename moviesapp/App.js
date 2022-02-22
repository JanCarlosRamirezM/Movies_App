import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  let nombre = 1;
  console.log(nombre);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hola Mundo </Text>
    </View>
  );
};

export default App;
