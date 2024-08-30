import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MuteImage from '../../Assets/mute.png'
import EndCall from '../../Assets/end-call.png'
export const BottomMenu = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >
                <Text style={[styles.text,{fontWeight:"bold"}]} >...Joe </Text>
                is Speaking</Text>
            <View style={styles.btnContainer} >
                <TouchableOpacity activeOpacity={0.8} >
                    <Image
                        resizeMode='contain'
                        source={MuteImage}
                        style={styles.imageStyleBack} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} >
                    <Image
                        resizeMode='contain'
                        source={EndCall}
                        style={styles.imageStyleFont} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        backgroundColor: "#416ec3",
        paddingHorizontal: 10,
        paddingVertical: 20,
        position: "absolute",
        bottom: 0,
        shadowColor: "#5888dc",
        shadowOffset: { width: 0, height: -100 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        zIndex: 1, //
    },
    btnContainer: {
        flexDirection: "row",
        paddingVertical: 15
    },
    imageStyleBack: {
        height: 60,
        width: 80,
        top: 5
    },
    imageStyleFont: {
        height: 70,
        width: 80
    },
    text: {
        color: "#fff",
        fontSize: 18
    }
})