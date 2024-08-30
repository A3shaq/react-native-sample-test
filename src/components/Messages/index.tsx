import { FlatList, Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import { USERS } from '../../users'

const HEIGHT = Dimensions.get("screen").height
export const Messages = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container} >
                <View style={styles.btnContainer} >
                    <Image
                        source={{ uri: item.img }}
                        style={styles.imageStyleBack} />
                    <Text style={styles.text} >{item.name}</Text>
                </View>
                <Text style={styles.messageText} >{item.message}</Text>
            </View >
        )
    }

    return (
        <FlatList
        showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listStyle}
            renderItem={renderItem}
            data={USERS}
            ListFooterComponent={() => <View style={{ height: HEIGHT*0.2}} />}

            />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5888dc",
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: "flex-start"
    },
    listStyle: {
        alignSelf: "flex-start"
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
        // paddingVertical: 15,
    },
    imageStyleBack: {
        height: 70,
        width: 70,
        borderRadius: 200
    },
    imageStyleFont: {
        height: 70,
        width: 80
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    messageText: {
        color: "#fff",
        fontSize: 28,
        letterSpacing: 3,
        lineHeight: 30,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})