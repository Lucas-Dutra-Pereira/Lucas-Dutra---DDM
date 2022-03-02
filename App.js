import * as React from 'react';
import { Button, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import Operacao from './Math'
import IMC from './Imc'
import Flatlist from './Flatlist'

function TelaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Operações Matemáticas')}
        title="Ir para Operações Matemáticas"
      />
    </View>
  );
}

function TelaMath({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Operacao></Operacao>
      <Button onPress={() => navigation.goBack()} title="Voltar para a Home" />
    </View>
  );
  };


function TelaFalar({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center - 50', justifyContent: 'center' }}>
      <Button onPress={() => Speech.speak('Olá Mundo!') } title= "Falar" />
      <Button onPress={() => navigation.goBack()} title= "Voltar para Home" />
    </View>
  );
  };

  function TelaIMC({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center - 50', justifyContent: 'center' }}>
       <IMC></IMC>
        <Button onPress={() => navigation.goBack()} title= "Voltar para Home" />
      </View>
    );
    };

    function TelaFlatlist({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center - 50', justifyContent: 'center' }}>
        <Flatlist></Flatlist>
          <Button onPress={() => navigation.goBack()} title= "Voltar para Home" />
        </View>
      );
      };


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TelaHome} />
        <Drawer.Screen name="Operações Matemáticas" component={TelaMath} />
        <Drawer.Screen name="Falar" component={TelaFalar} />
        <Drawer.Screen name="IMC" component={TelaIMC} />
        <Drawer.Screen name="Flat List" component={TelaFlatlist} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}