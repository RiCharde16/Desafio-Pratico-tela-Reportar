import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Button(props: any){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{props.btnLabel}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#07689F",
        width: 300,
        height: 40,
        marginLeft: 25,
        marginTop: 30
    },
    btnText:{
        color: '#fff',
        fontWeight: '600',
    }
})