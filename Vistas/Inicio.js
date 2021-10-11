import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Inicio = () => {

return (
<View style={{ flex: 1, alignItems: 'center'}}>

        <ScrollView 
          horizontal
          style={{width: '90%', marginTop: 25}}>

            <View style={styles.ImgCentrado}>
              <TouchableOpacity onPress={() => alert('Seleccion de promocion')}>
                <Image 
                  source={require('../assets/img/LogoFF.png')}
                  style={{width: 290, height: 250, marginRight: 10}}>
                </Image>
              </TouchableOpacity>
            </View>

            <View style={styles.ImgCentrado}>
            <TouchableOpacity onPress={() => alert('Seleccion de promocion')}>
                <Image 
                  source={require('../assets/img/LogoFF.png')}
                  style={{width: 290, height: 250, marginRight: 10}}>
                </Image>
              </TouchableOpacity>
            </View>

            <View style={styles.ImgCentrado}>
            <TouchableOpacity onPress={() => alert('Seleccion de promocion')}>
                <Image 
                  source={require('../assets/img/LogoFF.png')}
                  style={{width: 290, height: 250, marginRight: 10}}>
                </Image>
              </TouchableOpacity>
            </View>

            <View style={styles.ImgCentrado}>
            <TouchableOpacity onPress={() => alert('Seleccion de promocion')}>
                <Image 
                  source={require('../assets/img/LogoFF.png')}
                  style={{width: 290, height: 250, marginRight: 10}}>
                </Image>
              </TouchableOpacity>
            </View>

            <View style={styles.ImgCentrado}>
            <TouchableOpacity onPress={() => alert('Seleccion de promocion')}>
                <Image 
                  source={require('../assets/img/LogoFF.png')}
                  style={{width: 290, height: 250, marginRight: 10}}>
                </Image>
              </TouchableOpacity>
            </View>

            <View style={styles.ImgCentrado}>
            <TouchableOpacity onPress={() => alert('Seleccion de promocion')}>
                <Image 
                  source={require('../assets/img/LogoFF.png')}
                  style={{width: 290, height: 250, marginRight: 10}}>
                </Image>
              </TouchableOpacity>
            </View>
            
        </ScrollView>

    </View>
);
}

const styles = StyleSheet.create({
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
    }

})

export default Inicio;
