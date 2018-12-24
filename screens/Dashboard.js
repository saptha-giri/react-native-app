import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        { key: "Customer","img":require("../img/customer.png") },
        { key: "Inventory","img":require("../img/inventory.png") },
        { key: "Products","img":require("../img/product.png") },
        { key: "Supplier","img":require("../img/supplier.png") },
        { key: "News Letter","img":require("../img/news.png") },
        { key: "Production tracker","img":require("../img/production.png") },
        { key: "Contact","img":require("../img/help.png") },
        { key: "Logout","img":require("../img/logout.png") }
      ]
    };
  }

  GetGridViewItem(item) {
    // Alert.alert(item);
    if(item == "Customer"){
      Actions.customer()
    }else if(item == "Contact"){
      Actions.contact()
    }else if(item == "Logout"){
      Actions.login()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
           data={ this.state.GridListItems }
           renderItem={ ({item}) =>
               <TouchableOpacity style={styles.GridViewContainer} onPress={this.GetGridViewItem.bind(this, item.key)}>
               <ImageBackground source={require('../img/bgimg.png')} style={styles.imageContent}>
               <View style={{/*width:80,height:80,borderRadius:80/2,borderWidth:1,borderColor:"green",*/alignItems:"center",justifyContent:"center"}}>
                 <Image
                    style={{width:50,height:50}}
                    source={item.img}
                  />
               </View>
                 <Text style={styles.GridViewTextLayout}> {item.key} </Text>
                 </ImageBackground>
               </TouchableOpacity> }
           numColumns={2}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#fff"
  },
  imageContent:{
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#000"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   // flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 180,
   width: 180,
   margin:10,
   // margin: 10,
   // backgroundColor: '#61d800'
},
GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   // color: '#fff',
   padding: 10,
 }
});
