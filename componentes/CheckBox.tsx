import React, {useState} from 'react'
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native'

export default function CheckBox(props: any){

    const [selected, setSelected] = useState(false)

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.CheckBox} onPress={()=>{setSelected(!selected)}}>
                {
                    selected?  <Image source={require('../Assets/check.png')} style={styles.check}/>: null
                }
            </TouchableOpacity>
            <Text style={styles.txt1}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 15
    },
    CheckBox:{
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: "#E2E2E2",
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 25,
        overflow: 'hidden',
    },
    check:{
        backgroundColor: "#006557",
        width: 20,
        height: 20
    },
    txt1:{
        color: '#6D7A78',
        width: 220,
        fontWeight: '500',
        fontSize: 15
    }
})