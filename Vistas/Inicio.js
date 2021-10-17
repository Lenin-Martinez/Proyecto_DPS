import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image ,TouchableHighlight, TextInput} from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import Productos from '../assets/List/Productos';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';


const Inicio = () => {
  const navigation = useNavigation();

  const Promociones = Productos.filter((result) => result.Categoria.includes('Promocion'))

    const [VerModal, setVerModal] = useState(false);
    const [Combo, setCombo] = useState('');
    const [DescCombo, setDescCombo] = useState('');
    const [PrecioCombo, setPrecioCombo] = useState('');
    const [imagenCombo, setImagenCombo] = useState('');
    const [Cantidad, setCantidad] = useState(0);
    
  function SeleccionCombo(resultado){
    const ComboSelect = Promociones.find((promo) => promo.Nombre === resultado)
  
    setCombo(resultado)
    setDescCombo(ComboSelect.Descripcion)
    setPrecioCombo(ComboSelect.Precio)
    setImagenCombo(ComboSelect.Imagen)
    setVerModal(true)
  }

function CerrarModal(){
  setVerModal(false)
  setCantidad(0)
}

const handleSignOut = () =>{
  auth
      .signOut()
      .then(() => {
          navigation.replace("Login")
      })
      .catch(error => alert(error.message))
}

return (
<View style={{ flex: 1, alignItems: 'center'}}>

  <ScrollView 
    horizontal
    style={{width: '90%', marginTop: 25}}>
   {
        Promociones.map((resultado) =>
        <View style={styles.ImgCentrado}>
        <TouchableOpacity onPress={() => SeleccionCombo(resultado.Nombre)}>
          <Image 
            source={{uri: resultado.Imagen}}
            style={{width: 290, height: 250, marginRight: 10, borderRadius: 20}}>
          </Image>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>          
            <Text style={{color: 'black', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 5, marginLeft: 20}}>{resultado.Nombre}</Text>
            <Text style={{color: '#870100', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 5, marginEnd: 25}}>${resultado.Precio}</Text>
          </View>
        </TouchableOpacity>
      </View>
        )
      }
  </ScrollView>  

  <View style={styles.container}>
            <Text>Correo: {auth.currentUser.email}</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={handleSignOut}
            >
                <Text style={styles.TextButton}>Cerrar Sesion</Text>
            </TouchableOpacity>
        </View>


  <Modal
    visible= {VerModal}>
    <View style={styles.ViewModalSup}>
      <View style={styles.ViewModalInf}>

        <View style={styles.Encabezado}>
          <TouchableHighlight onPress={() => CerrarModal()}>
            <Image
              source={require('../assets/img/flecha.png')}
              style={styles.flechaAtras}
            />
          </TouchableHighlight>
        </View>

        <View>
          <Image
            source={{uri: imagenCombo}}
            style={{width: 350, 
                    height: 250, 
                    alignSelf: 'center',
                    borderRadius: 15
                  }}
          />

        <Text style={{fontSize: 50, fontWeight: 'bold', margin: 5}}>{Combo}</Text>

        <Text style={{fontSize: 20, 
                      width: '80%', 
                      marginLeft: 25}}>{DescCombo}</Text>

        <View style={{flexDirection: 'row',
                      marginLeft: 25,
                      justifyContent: 'space-between'}}>

          <Text style={{fontSize: 40, 
                        fontWeight: 'bold', }}>${PrecioCombo}</Text>

          <View style={{flexDirection: 'row'}}>

            <Text style={{fontSize: 25, 
                          fontWeight: 'bold',
                          textAlignVertical: 'center',
                          marginTop: 5,
                          marginRight: 10}}>Cantidad</Text>

            <TextInput 
              style={{backgroundColor: '#b4eeb4', 
                      fontSize: 25, 
                      width: '35%', 
                      height: '75%', 
                      borderRadius: 15, 
                      marginTop: 10,
                      textAlign: 'center'}}
              keyboardType='numeric'
              onChangeText={(cant) => setCantidad(cant)}
            />
          </View>
                    
        </View>

        <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 25, color: '#17A05D', marginTop: 20}}>Total: ${parseFloat(PrecioCombo * Cantidad)}</Text>

        <Button title="Agregar al pedido"/>
        </View>
      </View>
    </View>
  </Modal>
</View>
);
}

const styles = StyleSheet.create({
    ImgCentrado:{
      alignContent: 'center',
      justifyContent: 'center',
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
      backgroundColor: '#0782F9',
      width:'40%',
      padding:15,
      borderRadius:10,
      alignItems:'center'
  },
  TextButton:{
      color:'white',
      fontWeight:'700',
      fontSize: 16
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})

export default Inicio;
