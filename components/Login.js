import React, { Component } from 'react'
import {View, Button, TextInput, ScrollView} from 'react-native'
import axios from 'axios';

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
        }
        this.email = ""
        this.password = ""
       
      }

      _loginTextInputChanged(text){
        this.email =  text
      }
     
      _PasswordTextInputChanged(text){
          this.password =  text
      }

    handleLogin = () => {
      
        const loginData = {
          email: email,
          password: password,
        };
        const api = axios.create({
          baseURL: "https://net2all.protech-inter.online/Api/login",
        });
        api.post("/login", loginData)
          .then((res) => {
            history.push("/dashboard/" + email);
          })
          .catch((error) => {
            setMessage("Auth failure! Please create an account");
            setIserror(true);
          });
      };


    render(){
        return(
            <ScrollView>
          <View style={{ marginTop: 20 }}>
          <TextInput onChangeText={(text) => this._loginTextInputChanged(text)} style={styles.textinput} placeholder='Email'/>
        <TextInput onChangeText={(text) => this._PasswordTextInputChanged(text)} style={[styles.textinput, styles.marginTop]} placeholder='Password'/>
        <Button title='Login' onPress={() => this.handleLogin()}/>
      </View>
      </ScrollView>
      )
    }
    }
    

