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
  TouchableOpacity,
  Alert,
  Platfrom} from 'react-native';
  import CustomButton from './Components/button'
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
      isError: false,
    }
  }

/*Gets the length of the password*/
  _getPasswordLength = (ValueHolder) => {
    var Value=ValueHolder.length.toString();
    this.setState({passwordLength: Value})
  }

/*Validates the password entered. 6-12 characters only.*/
  _validatePassword = () => {
    var Value = this.state.passwordLength;
    if (Value>=6 && Value<=12)
    {
      this.setState({passwordError: 'Valid'})
      console.log('Password is valid')
    }
    else
    { 
      this.setState({passwordError: 'Invalid'})
      console.log('Password is invalid')
    }
  }

/*Validates the email address entered.*/
  _validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(this.state.username) === false)
      {
        console.log("Email is Not Correct");
        this.setState({isError: true})
      }
      else 
      {
        console.log("Email is Correct");
        this.setState({isError: false})
      }  
  }

  _onPressButton = () => {
    this._validateEmail();
    this._validatePassword();
      console.log('Email: ' + this.state.username);
      console.log('Password Lenght: ' + this.state.passwordLength);
  }
  
  render() {
    return (
        
        <ScrollView>
        <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
        <View style={{flex: 1, height:100, backgroundColor: 'white'}}>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('./images/logo.png')} />
        </View>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.input}
            placeholder ='Input email address'
            onChangeText={
              (text) => {
                this.setState({username: text})
              }
            }
          />

          <Text style={styles.error}>not correct format for email address</Text>

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

          <Text style={styles.error}>please use at least 6-12 characters</Text>

        </View>

        <View style={styles.buttonContainer}>
          <CustomButton 
                  text="Sign In"
                  onPress={
                    this._onPressButton}

                  />
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
        
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

});