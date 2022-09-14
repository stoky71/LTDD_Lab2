import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, LayoutAnimation } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={[
        "rgba(229, 244, 245, 1)",
        "rgba(209, 244, 246, 1)",
        "rgba(199, 244, 246, 1)",
        "rgba(0, 204, 249, 1)",
      ]}
      style={styles.background}>
        <Image source={require("./images/circle.png")} style={styles.circle}></Image>
        <Text style={styles.textTittle}>GROW YOUR BUSINESS</Text>
        <Text style={styles.text}>We will help you to grow your business using online </Text>
        <View style={styles.buttonView}>
          <LinearGradient
          style={styles.button}
          colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}>
            <Button title='LOGIN'></Button>
          </LinearGradient>
          <LinearGradient
          style={styles.button}
          colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}>
            <Button title='SIGN UP'></Button>
          </LinearGradient>
        </View>
        <Text style={styles.textBottom}>HOW WE WORK?</Text>
      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
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
  circle:{
    marginTop:  150,
    resizeMode: "stretch"
  },
  textTittle:{
    fontSize: 25,
    fontStyle: "bold",
    paddingTop: 50,
    width: 150,
    fontWeight: "800",
    textAlign: "center"
  },
  text:{
    fontSize: 25,
    fontStyle: "bold",
    paddingTop: 50,
    width: 350,
    fontWeight: "800",
    textAlign: "center"
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
    paddingTop: 20,
    fontStyle: "bold",
    fontSize: 18,
    width: 189,
    fontWeight: "700",
    textAlign: "center",
  },
});
