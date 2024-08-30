import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import BackImage from '../../Assets/back.png'
import FontImage from '../../Assets/font.png'
export const Header = () => {
    return (
        <View  style={styles.container} >
            <Image
                resizeMode='contain'
                source={BackImage}
                style={styles.imageStyleBack} />
            <Image
                resizeMode='contain'
                source={FontImage}
                style={styles.imageStyleFont} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        alignSelf:"center",
        shadowColor: "#5888dc",
        shadowOffset: { width: 0, height: 50 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        zIndex: 1, //
        backgroundColor:"#5888dc",
        paddingHorizontal:10,
        paddingVertical:10

    },
    imageStyleBack: {
        height: 50,
        width: 80
    },
    imageStyleFont: {
        height: 50,
        width: 50
    }
})