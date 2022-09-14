import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, LayoutAnimation, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={["rgba(189, 246, 198, 0)", "rgba(189, 246, 198, 1)"]}
      style={styles.background}>
        <Image source={require("./images/lock.png")} style={styles.lock}></Image>
        <Text style={styles.textTittle}>FORGET PASSWORD?</Text>
        <Text style={styles.text}>Provide your account's email for which you want to reset your password </Text>
        <View style={styles.viewInput}>
          <Image source={require("./images/mail.png")} style={styles.logoMail}/>
          <TextInput style={styles.input} placeholder="Email"></TextInput>
        </View>
        <LinearGradient
          style={styles.button}
          colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}
        >
          <Button
            title="NEXT"
            color={"#000"}/>
        </LinearGradient>
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
  lock:{
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
    fontSize: 17,
    fontStyle: "bold",
    paddingTop: 25,
    width: 350,
    fontWeight: "800",
    textAlign: "center"
  },
  viewInput: {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logoMail: {
    backgroundColor: "#E5E5E5",
    position: "absolute",
    top: 52,
    zIndex: 5,
    left: 30,
  },
  input: {
    width: "85%",
    height: 50,
    fontSize: 18,
    paddingLeft: 60,
    marginTop: 50,
    color: "#000",
    backgroundColor: "#E5E5E5",
  },
  button: {
    width: "85%",
    marginTop: 50,
    paddingTop: 5,
    paddingBottom: 5,
    fontStyle: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
