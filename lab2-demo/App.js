import * as React from 'react';
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [total, setTotal] = useState("");

  const handlerTotal = () => {
    setTotal(Number(val1) + Number(val2));
  }

  return (
    <View style={styles.container}>
      <Text>A:</Text>
      <TextInput placeholder='nhap a' value={val1} onChange={setVal1}/>
      <Text>B:</Text>
      <TextInput placeholder='nhap b' value={val2} onChange={setVal2}/>
      <View>
        <Button title='Submit!' onPress={handlerTotal} ></Button>
        <Text>{total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
