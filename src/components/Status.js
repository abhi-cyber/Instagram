import { View, Text,StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Status = ({route, navigation}) => {

    const {name} = route.params;
    const {image} = route.params;

  return (
    <View
        style={{
            backgroundColor: 'black',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}
    >
      
        <StatusBar backgroundColor='black' barStyle='light-content'  />
        <View 
        style={{
            height: 3,
            width: '95%',
            borderWidth: 1,
            borderColor: 'grey',
            position: 'absolute',
            top: 18,
        }}>

            <View style={{
                height: '100%',
                backgroundColor: 'white',
                width: '50%'
            }}></View>
        </View>

        <View style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 12,
            width: '90%',
            left:0,
        }}>
            <View style={{
                borderRadius: 100,
                width:30, 
                height: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image 
                    source={image} 
                    style={{
                    borderRadius: 100,
                    backgroundColor: 'orange',
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%'
                }} />
            </View>
            <View style={{
                justifyContent: 'space-aound',
                flexDirection: 'row',
                width: '100%'
            }}>
                <Text style={{color:'white', fontSize: 15, paddingLeft: 10}}>{name}</Text>
                <TouchableOpacity>
                    <Ionic name='close' style={{fontSize:20, color:'white', opicity: 0.6}} />
                </TouchableOpacity>
            </View>
        </View>
        <Image source={image} style={{position: 'absolute', width: '100%', height: 600}} />
        <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
            width: '100%'
        }}>
            <TextInput 
                placeholder='send message' 
                placeholderTextColor='white'
                style={{
                    borderColor: 'white',
                    borderRadius: 25,
                    width: '85%',
                    height: 50,
                    paddingLeft: 20,
                    borderWidth: 1,fontSize: 20,
                    color: 'white',
                }} 
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="navigation" style={{fontSize:30, color: 'white'}} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Status