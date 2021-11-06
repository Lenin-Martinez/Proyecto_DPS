import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Image , TouchableHighlight, Linking} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root(){
  return(
    <Drawer.Navigator initialRouteName="Inicio"> 
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Entradas" component={Entradas} />
          <Drawer.Screen name="Desayunos" component={Desayunos}/>
          <Drawer.Screen name="Almuerzos" component={Almuerzos}/>
          <Drawer.Screen name="Postres" component={Postres}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  const ContactoPress = async() => {
    await Linking.openURL("tel:+50360273809");
  }
  const MapaPress = async() => {
    await Linking.openURL("https://goo.gl/maps/fBK6VN24oPV7RKgV9");
  }
  const AyudaPress = async() => {
    await Linking.openURL("");
  }

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

          <View style={styles.BannerBtnCarrito}>
            <TouchableOpacity onPress={() => alert('Rediccionamiento al apartado de Carrito')}>
              <Image 
                  source={require('./assets/img/carrito.png')}
                  style={{width: 40, height: 40}}>
              </Image>
            </TouchableOpacity>
          </View>
        </View>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
        </Stack.Navigator>


        


        <View style={styles.BannerInf}>
          <View style={{marginTop: '3%', flexDirection: 'row'}}>

            <TouchableOpacity onPress={AyudaPress}>
              <Text style={{color: 'black'}}>Ayuda</Text>
            </TouchableOpacity>

            <Text style={{color: 'black'}}>       |       </Text>

            <TouchableOpacity onPress={ContactoPress}>
              <Text style={{color: 'black'}}>Contacto</Text>
            </TouchableOpacity>

            <Text style={{color: 'black'}}>       |       </Text>

            <TouchableOpacity onPress={MapaPress}>
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
  justifyContent: 'flex-start'
},
BannerImageSpc:{
  flexBasis: 100,
  height: '100%',
  marginTop: 25,
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
BannerBtnCarrito:{
  flexBasis: '73%',
  height: 50, 
  marginTop: 30,
  marginLeft: 30,
  flexWrap: 'wrap',
  alignSelf: 'center'
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