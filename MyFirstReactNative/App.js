import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  View, 
  Image, 
  Button, 
  Text, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert} from 'react-native';
  //import CustomButton from './Components/button'
  import HideMe from './Components/hideMe';

export default class Vananaz extends Component {

  constructor(props) {
    super(props);

    this.state={
      username:"",
      password: "",
      passwordLength: 0,
      passwordError: 'valid',
      isHidden: false,
      isEmailError: false,
      isPassError: false,
      ButtonStateHolder : false, //button is now enabled
    }
  }

  _disableButton =()=>{
      this.setState({
        ButtonStateHolder : true ,
      })
  }

  _enableButton =()=>{
      this.setState({
        ButtonStateHolder : true ,
      })
  }


//Gets the length of the password
  _getPasswordLength = (ValueHolder) => {
    var Value=ValueHolder.length.toString();
    this.setState({passwordLength: Value})
  }

//Validates the password entered. 6-12 characters only.
  _validatePassword = () => {
    var Value = this.state.passwordLength;
    if (Value>=6 && Value<=12)
    {
      this.setState({isPassError: false})
      console.log('Password is valid')
      this._enableButton();
    }
    else
    { 
      this.setState({isPassError: true})
      console.log('Password is invalid')
      this._disableButton();
    }
  }

//Validates the email address entered.
  _validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(this.state.username) === false)
      {
        console.log("Email is Not Correct");
        this.setState({isEmailError: true})
        this._disableButton();
      }
      else 
      {
        console.log("Email is Correct");
        this.setState({isEmailError: false})
        this._enableButton();
      }  
  }

  _onPressButton = () => {
    //Alert.alert('Button Clicked') ;
    this._validateEmail();
    this._validatePassword();
      console.log('Email: ' + this.state.username);
      console.log('Password Lenght: ' + this.state.passwordLength);
  }
  
  render() {
    return (
        <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
        <ScrollView>
        
        <View style={{flex: 2, height:100, backgroundColor: 'white'}}>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('./images/logo.png')} />
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.inputContainer}>

            <Text style={styles.label}>Email</Text>
            <TextInput
              keyboardType='email-address'
              underlineColorAndroid='transparent'
              style={styles.input}
              placeholder ='Input email address'
              onChangeText={
                (text) => {
                  this.setState({username: text}),
                  this._validateEmail()
                }
              }
            />

            <Text style={[styles.error, {color: this.state.isEmailError ? 'red' : 'white' }]}> not correct format for email address</Text>

            <Text style={styles.label}>Password</Text>
            <TextInput
              underlineColorAndroid='transparent'
              secureTextEntry={true} 
              style={styles.input}
              placeholder ='Input password'
              onChangeText={
                  (text) => {
                    this.setState({password: text}),
                    this._getPasswordLength(text)
                }
              }
            />
            <Text style={[styles.error, {color: this.state.isPassError ? 'red' : 'white' }]}>please use at least 6-12 characters</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            activeOpacity = { .5 } 
            style={[styles.buttonStyle, {backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#714DB2' }]}
            disabled={this.state.ButtonStateHolder}
            onPress={this._onPressButton}>
              <Text style={styles.textStyle}>Sign In</Text>
          </TouchableOpacity>
        
        </View>

        </ScrollView>
        </KeyboardAvoidingView>
        
    );
  }
}

const styles = StyleSheet.create({

  logoContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },

  inputContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'white', 
    marginTop: 50,
  },

  buttonContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 50,
  },

  label: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
  },

  error: {
    color: 'white',
    fontSize: 10,
    fontStyle: 'italic',
  },

  input: {
    height: 40, 
    borderColor: '#714DB2', 
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },

  textStyle: {
    fontSize:20,
    color: '#ffffff',
    textAlign: 'center'
  },
  
  buttonStyle: {
    padding:10,
    borderRadius:5
  }

});