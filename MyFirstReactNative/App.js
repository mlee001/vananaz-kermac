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
  Alert  } from 'react-native';

export default class Vananaz extends Component {

  constructor(props) {
    super(props);
    this.state={
      username:"",
      password: "",
    }
  }

  _onPressButton() {
    console.log('this.props.username');
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
                this.setState({username: text});
              }
            }
            value={this.state.username}
          
          />
          <Text style={styles.error}>not correct format for email address</Text>

          <Text style={styles.label}>You type: {this.state.username} </Text>
          <TextInput
            underlineColorAndroid='transparent'
            secureTextEntry={true} 
            style={styles.input}
            placeholder ='Input password'

            onChangeText={
              (text) => {
                this.setState({password: text});
              }
            }
          
          />
          <Text style={styles.error}>please use at least 6-12 characters</Text>
  
          
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button}
            onPress={this._onPressButton} 
            title= "Sign In"
            color= '#714DB2'
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
    color: 'red',
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

  button: {
    width: 300,
    
  },

});