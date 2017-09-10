import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class CausaleTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }

  changeText = function ({text}) {
    this.setState({ text: text });
    this.props.changeText({text});
  }

  render() {
    return (
      <View>
      {/*<Text>Statetext: {this.state.text}</Text> */}
      <TextInput
        style={styles.component}
        onChangeText={(text) => this.changeText({text})}
        value={this.state.text}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'green',
    fontSize: 22,
    // flex: 1,
    padding: 20,
    width: '80%',
  },
});
