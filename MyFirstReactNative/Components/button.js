import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class customButton extends Component {

	constructor(){
	    super();
	    this.state={
	      // Default Value for ButtonStateHolder State. Now the button is Enabled.
	      ButtonStateHolder : false,
	 
	      // Default Text for Button Title.
	      ButtonTitle : 'Button Enabled'
	 
	    }
	  }

	_DisableButtonFunction =()=>{
    
      this.setState({
        
        // On State True it will Disable the button.
        ButtonStateHolder : true ,
 
        ButtonTitle : 'Button Disabled'
     
      })
    }


	render() {
		const { text, onPress} = this.props;
		return (
		  <TouchableOpacity 
			activeOpacity = { .5 } 
		  	style={[styles.buttonStyle, {backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#714DB2' }]}
		  	disabled={this.state.ButtonStateHolder}
			onPress={() => onPress()}
			//onPress={this._DisableButtonFunction}
		  >
			 <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
	}
}

customButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  
  textStyle: {
    fontSize:20,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:10,
	//backgroundColor: '#714DB2',
	borderRadius:5
  }
});

export default customButton;