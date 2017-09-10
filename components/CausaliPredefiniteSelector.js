import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, Text, FlatList, Picker } from 'react-native';

class CausaliPredefiniteItemSelector extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.value);
  };
  render() {
      return (
         <Picker.Item onPress={this._onPress} style={stylesItem.textItem} key={this.props.key} label={this.label} value={this.value} ></Picker.Item>
      );
  }
}

export default class CausaliPredefiniteSelector extends React.PureComponent {

  state = {
  items: [
  { label:'Spese', value: 'spese'},
  { label:'Benzina', value: 'benzina'},
  { label:'Bancomat', value: 'bancomat'},
  { label:'Telepass', value: 'telepass'},
  { label:'Bollette', value: 'bollette'},
  { label:'Internet', value: 'internet'},
  ]
};


  render() {
    var listItems = this.state.items.map(function(item, key) {
      return (
         <CausaliPredefiniteItemSelector key={key} label={item.label} value={item.value} ></CausaliPredefiniteItemSelector>
      );
    });

    return (
      <View>
        <Text>Selezione causali predefinite</Text>
        <Picker
        mode='dropdown'
        selectedValue={this.state.selectedValue}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}
        itemStyle={stylesItem.textItem}
        >
        {listItems}
        </Picker>
        <Text style = {styles.text}>{this.state.selectedValue}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'blue'
   }
})
const stylesItem = StyleSheet.create({
   textItem: {
      fontSize: 88,
      alignSelf: 'center',
      color: 'green'
   }
})