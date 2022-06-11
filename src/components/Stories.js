import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {

    const navigation = useNavigation();

    const storyInfo = [{
        id:1,
        name: 'Your Story',
        image:'https://media-exp2.licdn.com/dms/image/C4D03AQFP-wF2RWRaoQ/profile-displayphoto-shrink_800_800/0/1650645842310?e=1660176000&v=beta&t=Sj66RCHwADdN9Y2-dC8_2yuVaDHn4aPSOXFyXSj-5B4'
    },
    {
        id:0,
        name: 'high_abhay',
        image:'https://media-exp2.licdn.com/dms/image/C5603AQGeRTPj8l52xg/profile-displayphoto-shrink_800_800/0/1651218009190?e=1660176000&v=beta&t=puk8eBXNF1chne7jZWKB9r_CSV7wN5-rjI8QwmIVtPQ'
    },
    {
        id:0,
        name: 'abhi1601',
        image:'https://media-exp2.licdn.com/dms/image/C4D03AQHBpc3qGD3vMQ/profile-displayphoto-shrink_800_800/0/1651381887391?e=1660176000&v=beta&t=X2zeenPTCsTG8usN8U3ThIfJXhm-PlqZl-x39eX_wU4'
    },
    {
        id:0,
        name: 'Abhishek70',
        image:'https://media-exp2.licdn.com/dms/image/C4E03AQF3kNK1rPooJA/profile-displayphoto-shrink_800_800/0/1649910765418?e=1660176000&v=beta&t=WB2hNEq2H1yC9tO6gs6GABmL8iQjY0r99fsEoY4MnWU'
    },
    {
        id:0,
        name: 'v0nser',
        image:'https://media-exp2.licdn.com/dms/image/C4D03AQG3iBEw5IPlSw/profile-displayphoto-shrink_800_800/0/1651258617933?e=1660176000&v=beta&t=osyNqgiLfgA15lfzPuZvBgavsYa6-QQJenHpJRs3Gp0'
    },
    {
        id:0,
        name: '_souvik_.chatterjee_',
        image: 'https://pps.whatsapp.net/v/t61.24694-24/286138981_1378147895930429_6115677866294132211_n.jpg?ccb=11-4&oh=01_AVxKlhJLsmslKBctIZtF4QCfMPPme9x2MaXh0YJZM2BqZg&oe=62AF7610'
    },
]
  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingVertical: 20}}
    >
        {
            storyInfo.map((data,index) => {
                return(
                    <TouchableOpacity key={index} onPress={() => navigation.push('Status', {name: data.name, image: data.image})}>
                        <View 
                            style={{flexDirection: 'column', paddingHorizontal: 8, position: 'relative'}}
                        >
                            {data.id == 1 ?(
                                    <View style={{bottom: 0, position: 'absolute', right: 10, zIndex: 1}}>
                                        <Entypo name="circle-with-plus" style={{fontSize: 20, backgroundColor: 'white', color: '#405de6', borderRadius:100,}} />
                                    </View>
                                ):null
                            }
                            <View style={{width: 68, height: 68, backgroundColor: 'white', borderWidth: 1.8, borderRadius: 100, bordercolor: '#c13584', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={{uri: data.image}} style={{resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 100, backgroundColor: 'orange'}} />
                            </View>
                            <Text style={{textAlign: 'center', fontSize: 10,opacity: data.id == 0 ? 1 : 0.8}}>{data.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    </ScrollView>
  )
}

export default Stories;