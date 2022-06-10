import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Search from './src/screens/Search';
import Reels from './src/screens/Reels';
import Activity from './src/screens/Activity';
import Profile from './src/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons'
import Status from './src/components/Status';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return(
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel:false,
          headerShown: false,
          tabBarStyle: {
            height: 50
          },

          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name === "Home"){
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search"){
              iconName = focused ? 'search' : 'ios-search-outline'
            }else if (route.name === "Reels"){
              iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline'
            }else if (route.name === "Activity"){
              iconName = focused ? 'ios-heart' : 'ios-heart-outline'
            }else if (route.name === "Profile"){
              iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline'
            }

            return <Ionic name={iconName} size={size} color={color} />
          }
      })}>

        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Reels' component={Reels} />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Activity' component={Activity} />

      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Bottom" component={bottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
