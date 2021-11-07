import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image ,TouchableHighlight, TextInput, alert, Alert} from 'react-native';


function VerManual(){
return(
    <View>
                <Text style={{fontSize: 50, fontWeight: 'bold', margin: 5}}>Ayuda</Text>

                <Image
                    source={require('../img/MapaSitio.png')}
                    style={{width: 365, height: 300,margin: 5}}
                    />

                <Text style={{fontSize: 20, 
                    width: '80%', 
                    marginLeft: 25}}>Manual de usuario {"\n"}</Text>


                <Text style={{fontSize: 20, 
                    width: '80%', 
                    marginLeft: 25}}>
                    Inicio de la aplicación{"\n\n"}
                    La primera ventana que muestra la aplicación es la ventada de registro/Inicio de sesión, 
                    donde, como su nombre lo especifica es necesario digitar las credenciales de acceso, 
                    o en caso contrario, las credenciales para registrarse en el caso que no posea su 
                    registro previo.{"\n\n"}

                    Acceso a la aplicación{"\n\n"}
                    Para registrarse en la aplicación “Fast Food”, es necesario un correo electrónico 
                    que servirá como su nombre de usuario, además, es necesario que digite una contraseña 
                    de acceso, esto servirá como su llave de acceso con el cual se garantiza que solo 
                    usted como usuario pueda acceder con sus credenciales; es importante que, tanto el 
                    correo electrónico como su contraseña se digiten en la casilla de texto indicada 
                    para cada uno, de lo contrario, la aplicación no le dará acceso al contenido.{"\n\n"}

                    1.	Digitar un correo electrónico en la casilla donde lo solicita. {"\n\n"}
                    2.	Digitar una contraseña de su preferencia en la casilla donde lo solicita. {"\n\n"}
                    3.	En caso de no tener una cuenta de registro, se debe seleccionar el botón “Registrarse”, 
                    de este modo su cuenta quedara almacenada y brindara acceso al mismo tiempo.{"\n\n"}
                    4.	En caso de tener una cuenta de registro con anterioridad, se debe seleccionar 
                    el botón “Iniciar sesión”, para que la aplicación brinde el acceso hacia su contenido.{"\n\n"}

                    </Text>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> 
                      <Image
                        source={require('../Manual/1.png')}
                        style={{width:140, height:275, marginHorizontal: 15}}
                      /> 
                      
                      <Image
                        source={require('../Manual/2.png')}
                        style={{width:140, height:275, marginHorizontal: 15}}
                      /> 
                      
                      <Image
                        source={require('../Manual/3.png')}
                        style={{width:140, height:275, marginHorizontal: 15}}
                      />
                    </View>
                  
                  <Text style={{fontSize: 20, 
                    width: '80%', 
                    marginLeft: 25}}>
                      {"\n\n"}
                    Vista general de la aplicación{"\n\n"}
                    1.	En la parte superior izquierda se muestra el menú de opciones de navegación, 
                    en el cual se verán las diferentes categorías de comida y dentro de las cuales 
                    se organizan los platillos según su tipo.{"\n\n"}
                    2.	En la parte superior derecha, se encuentra el botón “Carrito”, acá puedes hacer 
                    el seguimiento de tu pedido mientras navegas en la aplicación{"\n\n"}
                    3.	En la parte inferior se puede ver el correo electrónico con el cual se inició sesión, 
                    así como el botón para cerrar sesión, de este modo nadie podrá acceder a su 
                    cuenta de “Fast Food”{"\n\n"}
                    4.	En la parte inferior izquierda se presenta el botón de “Ayuda”, en el cual se 
                    muestra el manual de usuario, acá se puede obtener una idea mas detalla del uso 
                    de la aplicación.{"\n\n"}
                    5.	En la parte inferior central, se encuentra el botón “contacto”, el cual, redirige la 
                    aplicación hasta el número de teléfono de atención al cliente.{"\n\n"}
                    6.	En la parte inferior derecha, se sitúa el botón “Mapa de sitio”, el cual accede a la 
                    aplicación de mapas de su dispositivo para poder ver la ubicación del local “Fast food” {"\n\n"}

                  </Text>

                  <Image
                    source={require('../Manual/4.png')}
                    style={{width:275, height:275, marginHorizontal: 40}}
                  />

                  
                  <Text style={{fontSize: 20, 
                    width: '80%', 
                    marginLeft: 25}}>{"\n\n"}
                      Selección de categoría y productos{"\n\n"}
                      1.	Dirigirse al menú de categorías{"\n\n"}
                      2.	Seleccionar una categoría de alimentos{"\n\n"}
                      3.	Seleccionar el producto que sea de su agrado {"\n\n"}
                      4.	Digitar la cantidad de dicho producto{"\n\n"}
                      5.	Seleccionar el botón “Agregar al pedido”{"\n\n"}
                  </Text>
                
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> 
                  <Image
                    source={require('../Manual/5.png')}
                    style={{width:140, height:275, marginHorizontal: 15}}
                  />

                  <Image
                    source={require('../Manual/6.png')}
                    style={{width:140, height:275, marginHorizontal: 15}}
                  />

                  <Image
                    source={require('../Manual/7.png')}
                    style={{width:140, height:275, marginHorizontal: 15}}
                  />

                  <Image
                    source={require('../Manual/8.png')}
                    style={{width:140, height:275, marginHorizontal: 15}}
                  />
                </View>
                
                <Text style={{fontSize: 20, 
                  width: '80%', 
                  marginLeft: 25}}>{"\n\n"}
                    Licencias commons implementadas
                </Text>

                <Image
                    source={require('../img/LicenciasT.jpg')}
                    style={{width:300, height:100, marginHorizontal:25, marginTop:15}}
                  />



                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> 

                  <Text> {"\n\n\n\n"} </Text>
                  
                  <Image
                    source={require('../img/L1.jpg')}
                    style={{width:80, height:90, marginHorizontal: 15, marginTop:10}}
                  />
                  
                  <View>
                    <Text style={{width: '80%'}}>
                    Atribución: Debe dar el {"\n"}
                    crédito adecuado, proporcionar {"\n"}
                    un enlace a la licencia e {"\n"}
                    indicar si se realizaron {"\n"}
                    cambios. Puede hacerlo de {"\n"}
                    cualquier manera razonable, {"\n"}
                    pero de ninguna manera que {"\n"}
                    sugiera que el licenciante {"\n"}
                    lo respalda a usted o a su uso. {"\n\n"}
                    </Text>
                  </View>
                  <Text>{"\n\n"}</Text>
                </View>

                
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> 
                  <Image
                    source={require('../img/L2.jpg')}
                    style={{width:80, height:90, marginHorizontal: 15, marginTop:10}}
                  />
                  
                  <View>
                    <Text style={{width: '80%'}}>
                    No comercial: No puede utilizar {"\n"}
                    el material con fines comerciales.{"\n\n"}
                    </Text>
                  </View>
                </View>

                
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> 
                  <Image
                    source={require('../img/L3.jpg')}
                    style={{width:80, height:90, marginHorizontal: 15, marginTop:10}}
                  />
                  
                  <View>
                    <Text style={{width: '80%'}}>
                    No derivadas: Si mezcla, transforma {"\n"}
                    o construye sobre el material, {"\n"}
                    no puede distribuir el material {"\n"}
                    modificado. {"\n\n"}
                    </Text>
                  </View>
                </View>
    </View>
);
}

export default VerManual;