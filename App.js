import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './src/screens/Home'
import OrderScreen from './src/screens/Order'
import StoreScreen from './src/screens/Store'
import AccPointsScreen from './src/screens/AccumulatePoints'
import OtherScreen from './src/screens/Other'
import LogoTitle from './src/components/HeaderHome'
import OrderTitle from './src/components/HeaderOrder'
import StoreTitle from './src/components/HeaderStore'
import OtherTitle from './src/components/HeaderOther'
import AccPointsTitle from './src/components/HeaderAccPoints'

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            }
            else if (route.name === 'Order') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (route.name === 'Store') {
              iconName = focused ? 'cafe-sharp' : 'cafe-outline';
            }
            else if (route.name === 'AccPoints') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            }
            else if (route.name === 'Other') {
              iconName = focused ? 'menu-sharp' : 'menu-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#dc8e4e',
          tabBarInactiveTintColor: '#848484',
        })}
      >
        <Tab.Screen name="Home" 
          component = {HomeScreen} 
          options = {{
            title: 'Trang chủ' ,
            headerTitle: props => <LogoTitle {...props} /> 
          }}
        />
        <Tab.Screen name="Order" 
          component={OrderScreen} 
          options={{
            title: 'Đặt hàng' ,
            headerStyle: {
                height: 120 
              },
            headerTitle: props => <OrderTitle {...props} />
          }} 
        />
        <Tab.Screen name="Store" 
          component = {StoreScreen} 
          options = {{
            title: 'Cửa hàng' ,
            headerStyle: {
                height: 120 
              },
            headerTitle: props => <StoreTitle {...props} />
          }}
        />
        <Tab.Screen name = "AccPoints" 
          component = {AccPointsScreen} 
          options = {{
            title: 'Tích điểm',
            headerStyle: {
                  height: 110 
                },
          headerTitle: props => <AccPointsTitle {...props} />
          }}
        />
        <Tab.Screen name = "Other" 
          component = {OtherScreen} 
          options = {{
            title: 'Khác' ,
            headerTitle: props => <OtherTitle {...props} />
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
