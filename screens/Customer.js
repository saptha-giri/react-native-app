import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class Customer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        { key: "Hyundai","img":require("../img/hyundai.png") },
        { key: "Renault Nissan","img":require("../img/renault.png") },
        { key: "Ford","img":require("../img/ford.png") },
        { key: "Fiat","img":require("../img/fiat.png") },
        { key: "KIA","img":require("../img/kia.png") },
        { key: "PSA","img":require("../img/psa.png") },
        { key: "Ashok Leyland","img":require("../img/ashok.png") },
        { key: "Lear Corporation","img":require("../img/lear.png") },
        // { key: "MSKH" }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
         data={ this.state.GridListItems }
         renderItem={ ({item}) =>
         
             <View style={styles.listContainer}>
               <Text style={styles.label}> {item.key} </Text>
               <Image
                  style={{width:100,height:50}}
                  source={item.img}
                />
             </View> }
         numColumns={1}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  listContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    borderBottomWidth:1
  },
  label:{
    fontWeight:"bold",
    fontSize:20,
    // color:"#04a03b",
    marginLeft:20,
    marginTop:10
  },
});
