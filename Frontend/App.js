import React,{ Component,useState } from 'react';
import { Text, View,StyleSheet,Button } from "react-native";
import 'localstorage-polyfill';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Speech from './Components/Speech';
import Assistant from './Components/Assistant';
// import Ass from './Components/Ass';
import Coach from './Components/Coach';
import Dropdown from './Components/Dropdown';
import Modaal from './Components/Modaal';
import 'text-encoding-polyfill'
// import 'localstorage-polyfill'; 
import SignalDisplay from './Components/SignalDisplay';
import History from './Components/History';
import jwtDecode from 'jwt-decode';
import SearchHis from './Components/SearchHis';

const Stack = createStackNavigator();
export default function App() {
let Ip='192.168.1.7'

  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Speech Rehabilitation App"
            component={Home}
            options={{title:'تطبيق تأهيل النطق'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title:'تسجيل الدخول'}}

          />
                    <Stack.Screen
            name="Register"
            component={Register}
            options={{title:'تسجيل '}}

          />
            <Stack.Screen
            name="Speech"
            component={Speech}
            options={{title:'تأهيل النطق'}}

          />
          <Stack.Screen
            name="Assistant"
            component={Assistant}
            options={{title:'المساعد '}}

          />
                    {/* <Stack.Screen
            name="Ass"
            component={Ass}
            options={{title:'المساعد '}}

          /> */}
        <Stack.Screen
            name="Coach"
            component={Coach}
            options={{title:'المدرب'}}

          />
          <Stack.Screen
            name="Modaal"
            component={Modaal}
          />
                  <Stack.Screen
            name="SignalDisplay"
            component={SignalDisplay}
            options={{title:'اظهار الصوت بيانيا'}}

          />
          <Stack.Screen
            name="History"
            component={History}
            options={{title:'بيانات المريض'}}

          />
                    <Stack.Screen
            name="SearchHis"
            component={SearchHis}
            options={{title:'البحث في بيانات المرضى'}}

          />
        </Stack.Navigator>
      </NavigationContainer>

  )
}




