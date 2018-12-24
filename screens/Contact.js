import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import call from 'react-native-phone-call';

export default class Contact extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image 
          style={styles.logo}
          source={require("../img/customer.png")}
          />
        </View>
        <View style={styles.content}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>NAME : </Text>
            <Text style={styles.label}>Thabrez Ali Rahamani</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>DESIGNATION : </Text>
            <Text style={styles.label}>A.M</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>DEPARTMENT : </Text>
            <Text style={styles.label}>N.P.D</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>MAIL : </Text>
            <Text style={styles.label}>thabrezalirahamani@phain.in</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>PHONE : </Text>
            <Text style={styles.label}>+91-9710875072</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={()=>{
            const args = {
              number: '9710875072',
              prompt: false,
            };
         
            call(args).catch(console.error);
          }}>
            <Text style={[styles.label,{color:"#fff"}]}>CALL ME</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:100,
    height:100,
    marginTop:12
  },
  circle:{
    width:150,
    height:150,
    borderRadius:150/2,
    borderWidth:1,
    alignItems:"center",
    borderColor:"#04a03b"
  },
  content:{
    flexDirection:"column"
  },
  header:{
    fontWeight:"bold",
    fontSize:25
  },
  label:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:5,
    color:"#04a03b"
  },
  button:{
    borderWidth:1,
    borderColor:"#04a03b",
    backgroundColor:"#04a03b",
    alignItems:"center",
    borderRadius:50,
    padding:10,
    marginTop:15,
    alignSelf:"center",
    width:300
  },
});
