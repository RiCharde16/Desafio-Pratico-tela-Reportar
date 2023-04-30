import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, StatusBar} from 'react-native';

// let img = require('./Assets/ArrowLeft.svg')

export default function Header(props: any){
    return(
        <View style={styles.header}>
            <StatusBar backgroundColor={'#006557'}/>
            <TouchableOpacity>
                <Image source={require('../Assets/ArrowLeft.png')} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.h1}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#006557",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    h1:{
        paddingLeft: 110,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'normal'
    },
    image:{
        // backgroundColor: "#000",
        marginLeft: 15,
        resizeMode: 'contain',
        width: 30,
        height: 50
    }
})