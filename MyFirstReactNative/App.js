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


export default class Vananaz extends Component {

  constructor(props) {
    super(props);

    this.state={
      username:'',
      password:'',
      passwordLength: 0,
      passwordError: 'valid',
      isHidden: false,
      isEmailError: true,
      isPassError: true,
      ButtonStateHolder : false, //button is now enabled
    }
  }

  _disableButton =()=>{
      this.setState({
        ButtonStateHolder : true,
      })
  }

  _enableButton =()=>{
      this.setState({
        ButtonStateHolder : false,
      })
  }

//Gets the length of the password
  _getPasswordLength = (ValueHolder) => {
    Value=ValueHolder.length.toString();
    this.setState({passwordLength: Value})
  }

//Validates both email and password. Disables button if input is invalid. 
  validate (text, type) 
  {
    alph = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (type=='username')
    {
      if(alph.test(text))
      {
        this.setState({isEmailError: true})
        if (!this.state.isPassError)
        {
          this._disableButton()
        }
        else
        {
          this._enableButton()
        }
      }
      else
      {
        this.setState({isEmailError: false})
        this._disableButton()
      }
    }
    else if (type=='password')
    {
      
      if(Value>=6 && Value <=12)
      {
        console.log('pass is correct')
        this.setState({isPassError: true})
        if (!this.state.isEmailError)
        {
          this._disableButton()
        }
        else
        {
          this._enableButton()
        }
        
      }
      else
      {
        console.log('pass is incorrect')
        this.setState({isPassError: false})
        this._disableButton()
      }
    }
  }

//Button action function. 
  _onPressButton = () => {
    Alert.alert('You are now logged in as: ' + this.state.username);
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
              returnKeyType = "next"
              style={styles.input}
              placeholder ='Input email address'
              onSubmitEditing={()=> this.passwordInput.focus()}
              onChangeText={
                (text) => {
                  this.validate(text, 'username'),
                  this.setState({username: text})
                }
              }
            />

            <Text style={[styles.error, {color: this.state.isEmailError ? 'white' : 'red' }]}> not correct format for email address</Text>

            <Text style={styles.label}>Password</Text>

            <TextInput
              underlineColorAndroid='transparent'
              returnKeyType = 'go'
              secureTextEntry={true} 
              style={styles.input}
              ref={(input) => this.passwordInput = input}
              placeholder ='Input password'
              onChangeText={
                  (text) => {
                    this._getPasswordLength(text),
                    this.setState({password: text}),
                    this.validate(text, 'password')
                  }
              }
            />
            <Text style={[styles.error, {color: this.state.isPassError ? 'white' : 'red' }]}>please use at least 6-12 characters</Text>
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