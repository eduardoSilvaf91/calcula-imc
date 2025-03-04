import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"#FFF",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding:10,
    },
    formLabel:{
        color:"#000",
        fontSize: 18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,
    },  
    buttonCalculator:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width: "90%",
        backgroundColor:"#05F",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#FFF"
    },
    errorMessage:{
        fontSize:12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
});

export default styles