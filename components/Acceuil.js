import React, {Component} from 'react';
import { StyleSheet,ImageBackground, Image, Text,  View, Button } from 'react-native';



 export default class Acceuil extends Component{
     render(){
         return(
            <View style={styles.container}>
           <Text style={styles.texte}>
                   Bienvenue sur collaBus
                  </Text>
    
            </View>

         )

     }
 }