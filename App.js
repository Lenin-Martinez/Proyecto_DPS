import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, TextInput, Image, TouchableHighlight, Linking} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
import LoginScreen from './Vistas/Login';
import Inicio from './Vistas/Inicio'
import Entradas from './Vistas/Entradas';
import Desayunos from './Vistas/Desayunos';
import Almuerzos from './Vistas/Almuerzos';
import Postres from './Vistas/Postres';
import VerManual from './assets/Manual/Manual';


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
    await Linking.openURL("https://drive.google.com/file/d/1NVDilRPOvvLqMDUbLsoi4stAxb6DlapL/view?usp=sharing");
  }

  const [VerModalCarrito, setVerModalCarrito] = useState(false);
  const [VerModalAyuda, setVerModalAyuda] = useState(false);

  const [Combo, setCombo] = useState('');
  const [DescCombo, setDescCombo] = useState('');
  const [PrecioCombo, setPrecioCombo] = useState('');
  const [imagenCombo, setImagenCombo] = useState('');
  const [Cantidad, setCantidad] = useState(0);

  function CerrarModalCarrito(){
    setVerModalCarrito(false)
  }

  function CerrarModalAyuda(){
    setVerModalAyuda(false)
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
            <TouchableOpacity onPress={() => setVerModalCarrito(true)}>
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

            <TouchableOpacity onPress={() => setVerModalAyuda(true)}>
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









                   
        <Modal
            visible= {VerModalCarrito}>
            <View style={styles.ViewModalSup}>
            <View style={styles.ViewModalInf}>

                <View style={styles.Encabezado}>
                <TouchableHighlight onPress={() => CerrarModalCarrito()}>
                    <Image
                    source={require('./assets/img/flecha.png')}
                    style={styles.flechaAtras}
                    />
                </TouchableHighlight>
                </View>



                <ScrollView>

                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> 
                    <Text style={{fontSize: 35, fontWeight: 'bold', margin: 5}}>Mi pedido completo</Text>

                    <Image
                      source={require('./assets/img/LogoFF.png')}
                      style={{width: 140, height: 100}}
                    />
                    
                    <View>
                      <Text style={{color: 'black', fontSize: 20}}>Descripcion de producto</Text>
                      <Text style={{color: 'black', fontSize: 20}}>Cantidad: 999</Text>
                      <Text style={{color: 'black', fontSize: 20}}>Total del Producto: 9999</Text>
                    </View>
                </View>



                <View>
                  <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 25, color: '#17A05D', marginTop: 20}}>Total: $</Text>
                  <Button title="Realizar pago del pedido"/>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>




        



                   
        <Modal
          visible= {VerModalAyuda}>
            <View style={styles.ViewModalSup}>
            <View style={styles.ViewModalInf}>

              <View style={styles.Encabezado}>
              <TouchableHighlight onPress={() => CerrarModalAyuda()}>
                  <Image
                  source={require('./assets/img/flecha.png')}
                  style={styles.flechaAtras}
                  />
              </TouchableHighlight>
              </View>

              <ScrollView>
                {VerManual()}
              </ScrollView>
            </View>
          </View>
        </Modal>


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
ViewModalSup: {
   width: '100%',
    height: '100%',
    flex:1,
    backgroundColor: 'rgba(1,1,1,0.8)',
    justifyContent: 'center',
    alignItems:'center',
},
ViewModalInf:
{
    height:'90%',
    width:'90%',
    backgroundColor: '#fff',
},
Encabezado:
{
  height: 50,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
},
flechaAtras:
{
  width: 35,
  height: 35,
  margin: 10,
},
button:{
  backgroundColor: '#1AA15F',
  width:'100%',
  padding:10,
  borderRadius:50,
  alignSelf:'center',
  textAlignVertical: 'center'
},
TextButton:{
  color:'white',
  fontWeight:'700',
  fontSize: 12,
},
container:{
backgroundColor: '#8EDCB9',
borderTopLeftRadius: 35,
borderTopRightRadius: 35,
width: '100%',
justifyContent:'space-around',
flexDirection: 'row',
alignItems:'center'
},

});
