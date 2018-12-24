import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Image, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        username:"",
        password:""
      };
    }
  render() {
    return (
      <View style={styles.container}>
      {/*<ImageBackground source={require('../img/login-img.jpg')} style={styles.imageContent}>*/}
      <View style={[{flex:2,alignItems:"center", justifyContent:"center"}]}>
      
        <Image
          style={styles.logo}
          source={require('../img/logo.png')}
        />
        </View>
        <View style={{flex:3}}>
          {/*<Text style={styles.label}>USERNAME</Text>*/}
          <View style={styles.textField}>
            <Image
              style={styles.avatar}
              source={require('../img/username.png')}
            />
            <TextInput style={styles.textBox} placeholder="USERNAME" onChangeText={(username) => this.setState({username})} />
          </View>
          {/*<Text style={styles.label}>PASSWORD</Text>*/}
          <View style={styles.textField}>
            <Image
              style={styles.avatar}
              source={require('../img/pwd.png')}
            />
            <TextInput style={styles.textBox} placeholder="PASSWORD" secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>{
            // Actions.push({sceneKey:"dashboard"})
            // Actions.dashboard({txt:"MR.Bot"})
            if(this.state.username==""){
              ToastAndroid.show('please enter the username', ToastAndroid.SHORT);
            }else if(this.state.password==""){
              ToastAndroid.show('please enter the password', ToastAndroid.SHORT);
            }else if(this.state.username=="admin" && this.state.password=="admin"){
              Actions.dashboard({txt:"MR.Bot"})
            }else{
              ToastAndroid.show('username or password is incorrect', ToastAndroid.SHORT);
            }
          }}>
            <Text style={[styles.label,{color:"#fff"}]}>LOGIN</Text>
          </TouchableOpacity>
        
        
        </View>
        {/*</ImageBackground>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  content:{
    flex:1
  },
  logo:{
    // alignSelf:"center",
    width:192,
    height:192,
    // marginBottom:30
  },
  avatar:{
    // alignSelf:"center",
    width:30,
    height:30,
    marginTop:20
  },
  textField:{
    // flex:1,
    flexDirection:"row",
    marginLeft:30,
  },
  imageContent:{
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#000"
  },
  label:{
    fontWeight:"bold",
    fontSize:20,
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
  textBox:{
    height:50,
    width:300,
    // backgroundColor: 'rgba(255,255,255,0.85)',
    // color: '#000',
    // borderRadius:25,
    borderBottomWidth:1,
    borderBottomColor:"#04a03b",
    fontSize:20,
    paddingHorizontal:16,
    marginVertical:10
  },
});
