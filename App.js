import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Customer from './screens/Customer';
import Contact from './screens/Contact';

const App = () => (
  <Router backAndroidHandler={()=>{
  	if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
  }}>
    <Stack key="root">
      <Scene key="login" hideNavBar={true} component={Login} type="reset"/>
      <Scene 
	      key="dashboard" 
	      component={Dashboard} 
	      title="DASHBOARD"
	      navigationBarStyle={{backgroundColor:"#008b00"}}
	      titleStyle={{color:"#fff",marginLeft:"37%"}}
	      type="reset"
	      // hideNavBar={true}
      />
      <Scene 
      	key="customer" 
      	component={Customer} 
      	title="CUSTOMER" 
      	navigationBarStyle={{backgroundColor:"#008b00"}}
	    titleStyle={{color:"#fff"}}
	    navBarButtonColor="white" />

    <Scene 
      	key="contact" 
      	component={Contact} 
      	title="CUSTOMER" 
      	navigationBarStyle={{backgroundColor:"#008b00"}}
	    titleStyle={{color:"#fff",marginLeft:"30%"}}
	    navBarButtonColor="white" />
    </Stack>
  </Router>
);

export default App;