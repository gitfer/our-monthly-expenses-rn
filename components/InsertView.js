import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CausaleTextInput from './CausaleTextInput'
import CausaliPredefiniteSelector from './CausaliPredefiniteSelector'

export default class InsertView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newExpense: {
        reason: props.text || 'Causale'
      }
    }
  }
  
  onChangeReason({text}){
    this.setState({ newExpense: {reason: text} });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.reason}>{this.state.newExpense.reason}</Text>
        <CausaleTextInput text={this.state.newExpense.reason} changeText={({text}) => this.onChangeReason({text}) }></CausaleTextInput>
        <CausaliPredefiniteSelector />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reason: {
    fontSize: 32
  }
});