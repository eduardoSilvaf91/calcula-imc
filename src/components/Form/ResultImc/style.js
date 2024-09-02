import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop:15,
        paddingTop:20,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
       
    },
    numberImc:{
        fontSize: 48,
        color:"#000",
        fontWeight: "bold",

    },
    information:{
        fontSize:18,
        color:"#00C",
        fontWeight: "bold",
    },

    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        marginBottom:10,
    },

    shared:{
        backgroundColor:"#1817f2",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,
    },

    sharedText:{
        color:"#FFF",
        fontWeight:"bold",
        paddingHorizontal:30
    }
});

export default styles