import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';

export default class App extends React.Component {
  state = {
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }

  atualizaValor1 = (number) => {
    this.setState({valor1:number})
  }

  atualizaValor2 = (number) => {
    this.setState({valor2:number})
  }

  subtrair(){
    this.state.resultado = parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  multiplicar(){
    this.state.resultado = parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  dividir(){
    this.state.resultado = parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  render(){
    return(
      <View>
        <StatusBar backgroundColor="black"/>
        <TextInput underlineColorAndroid="transparent" placeholder="Digite o Valor 1" placeholderTextColor="black" autoCapitalize='none' 
        onChangeText={this.atualizaValor1} keyboardType='numeric'/>
        <TextInput underlineColorAndroid="transparent" placeholder="Digite o Valor 2" placeholderTextColor="black" autoCapitalize='none' 
        onChangeText={this.atualizaValor2} keyboardType='numeric'/>
        <TouchableOpacity onPress={()=>this.subtrair(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text> Subtrair </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.multiplicar(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text> Multiplicar </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.dividir(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text> Dividir </Text>
        </TouchableOpacity>
      </View>
    )
  }
}