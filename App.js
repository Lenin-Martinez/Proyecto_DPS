import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Image , TouchableHighlight} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import { Background } from '@react-navigation/elements';
import Inicio from './Vistas/Inicio';
import Entradas from './Vistas/Entradas';
import Desayunos from './Vistas/Desayunos';
import Almuerzos from './Vistas/Almuerzos'; 
import Postres from './Vistas/Postres';
import LoginScreen from './Vistas/Login';
import { createStackNavigator } from '@react-navigation/stack';
//Librerias de login 
import { useNavigation } from '@react-navigation/core';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function Root() {
  
  return(
    <Drawer.Navigator > 
          
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Entradas" component={Entradas} />
          <Drawer.Screen name="Desayunos" component={Desayunos}/>
          <Drawer.Screen name="Almuerzos" component={Almuerzos}/>
          <Drawer.Screen name="Postres" component={Postres}/>
        </Drawer.Navigator>
  )
}

export default function App() {

 
  return (
    
    
    <>
      <NavigationContainer visible={false}>
        <View style={styles.BannerSup}>
          <View style={styles.BannerImageSpc}>
            <Image 
                source={require('./assets/img/LogoFF.png')}
                style={styles.BannerIcono}>
            </Image>
          </View>

          <View style={styles.BannerEslogan}>
            <Image 
                source={require('./assets/img/Eslogan.png')}
                style={styles.BannerIcono}>
            </Image>
          </View>

          <View style={styles.BannerBtnAyuda}>
            <TouchableOpacity onPress={() => alert('Rediccionamiento al apartado de ayuda')}>
              <Text>Ayuda</Text>
              <Image 
                  source={require('./assets/img/Ayuda.png')}
                  style={{width: 30, height: 30}}>
              </Image>
            </TouchableOpacity>
          </View>
        </View>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
          />
        </Stack.Navigator>


        <View style={styles.BannerInf}>
          <View style={{marginTop: '3%', flexDirection: 'row'}}>

            <TouchableOpacity onPress={() => alert('Redireccionamiento a inicio')}>
              <Text style={{color: 'black'}}>Inicio</Text>
            </TouchableOpacity>

            <Text style={{color: 'black'}}>       |       </Text>

            <TouchableOpacity onPress={() => alert('Redireccionamiento a contactos')}>
              <Text style={{color: 'black'}}>Contacto</Text>
            </TouchableOpacity>

            <Text style={{color: 'black'}}>       |       </Text>

            <TouchableOpacity onPress={() => alert('Redireccionamiento a mapa de sitio')}>
              <Text style={{color: 'black'}}>Mapa de sitio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </NavigationContainer>
     </> 
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
BannerSup:{
  flexDirection: 'row',
  height: 100,
  width: '100%',
  backgroundColor: '#8EDCB9',
},
BannerImageSpc:{
  flexBasis: 100,
  height: '100%',
  margin: 20,
},
BannerIcono:
{
  width: '100%',
  height: '80%',
},
BannerEslogan:{
  flexBasis: 200,
  width: '100%',
  height: '90%',
  marginTop: 20
},
BannerBtnAyuda:{
  flexBasis: '73%',
  height: 50, 
  marginTop: 25,
  flexWrap: 'wrap',
  alignContent: 'flex-end',
},
BannerInf:{
  flexDirection: 'row',
  backgroundColor: '#8EDCB9',
  height: 40,
  width: '100%',
  justifyContent: 'center',
},
ImgCentrado:{
  alignContent: 'center',
  justifyContent: 'center'
},
ImagenProducto:{
  width: 180, 
  height: 150, 
  marginRight: 50,
},
TextoProducto:{
  width: 175, 
  marginBottom: 70,
},


});
