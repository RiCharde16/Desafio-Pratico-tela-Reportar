import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Header from './componentes/Header'
import CheckBox from './componentes/CheckBox';
import Button from './componentes/Button';


export default function App1(){


  return(
    <View>
      <Header text="Reportar"/>
      <View style={styles.body}>
        {/* <Icon name="check" size={20}/> */}
        <View style={{marginTop: 0}}>
          <CheckBox text="O Profissional não compareceu."/>
          <CheckBox text="O Profissional não prestou um bom serviço."/>
          <CheckBox text="Outro."/>
        </View>
        <TextInput style={styles.input1} placeholder='Titulo'/>
        <TextInput style={styles.input2} 
          placeholder='Especifique aqui o que houver.' 
          multiline={true}
          numberOfLines={10}  
          maxLength={100}
        />
        <Button btnLabel="Reportar"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input1:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6D7A78',
    width: 300,
    height: 50,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 2,
  },
  input2:{
    borderRadius: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6D7A78',
    width: 300,
    textAlignVertical: 'top',
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  body:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: '100%'
  },
  button:{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
    width: 325,
    paddingLeft: 25
  }
})