import { StyleSheet } from "react-native";

const MyStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "brown"
    },

    iconButton: {
        marginTop: 30,
        flex: 1,
        alignItems: "center"
    },

    containerModal: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "gray"
    },

    modal: {
        backgroundColor: "black", 
        padding: 20, 
        borderRadius: 10
    }
})

export default MyStyle