import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Desayunos = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <ScrollView style={{ width: '90%', marginTop: 20}}>
          <ScrollView horizontal>
  
            <View style={styles.ImgCentrado}>
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
  
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
            </View>
  
  
  
            <View style={styles.ImgCentrado}>
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
  
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
            </View>
  
  
  
            <View style={styles.ImgCentrado}>
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
  
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
            </View>
  
  
  
            <View style={styles.ImgCentrado}>
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
  
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
            </View>
  
  
  
            <View style={styles.ImgCentrado}>
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
  
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
            </View>
  
  
  
            <View style={styles.ImgCentrado}>
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
  
              <View>
                <TouchableOpacity onPress={() => alert('Seleccion de producto en "Desayunos" ')}>
                  <Image 
                    source={require('../assets/img/LogoFF.png')}
                    style={styles.ImagenProducto}>
                  </Image>
                  
                  <Text style={styles.TextoProducto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </TouchableOpacity>
              </View>
            </View>
  
  
  
          </ScrollView>
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

export default Desayunos;

