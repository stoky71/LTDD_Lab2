import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import images from "../../assets/index";
function mota() {
    return(
      <View>
        <LinearGradient colors={[
            rgb(196,196,196), rgb(40,247,172)
        ]}>
            <Image source={images.circle} style={style.logo}/>
            <Text style={style.textTitle}>GROW YOUR BUSINESS</Text>
            <Text style={style.text}>We will help you to grouw your business using online server</Text>
            <View>
                <LinearGradient style={style.button} colors={rgb(227,192,0)}>
                    <Button title="LOGIN"></Button>
                </LinearGradient>
                <LinearGradient colors={rgb(227,192,0)} style={style.button}>
                    <Button title="SIGN UP"></Button>
                </LinearGradient>
            </View>
            <Text style={style.textBottom}>HOW WE WORK?</Text>
        </LinearGradient>   
      </View>  
    );
}
export default mota;
const style = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      },
      background: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
      },
    
      logo: {
        marginTop: 200,
        resizeMode: "stretch",
      },
      textTitle: {
        paddingTop: 50,
        fontStyle: "bold",
        fontSize: 25,
        width: 189,
        fontWeight: "700",
        lineHeight: "30",
        textAlign: "center",
      },
      text: {
        paddingTop: 50,
        fontStyle: "bold",
        fontSize: 15,
        width: 350,
        fontWeight: "700",
        lineHeight: "18",
        textAlign: "center",
      },
      buttonView: {
        paddingTop: 50,
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
      },
      button: {
        fontStyle: "bold",
        fontSize: 18,
        width: 120,
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: "center",
      },
      textBottom: {
        paddingTop: 50,
        fontStyle: "bold",
        fontSize: 18,
        width: 189,
        fontWeight: "700",
        lineHeight: "20",
        textAlign: "center",
      },
})