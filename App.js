import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InsertView from './components/InsertView'

export default class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <InsertView />
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
});
