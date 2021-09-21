import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Alert, ActivityIndicator } from 'react-native';

export default function App() {

  const handleAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
        { text: "Success", onPress: () => console.log("Success") }
      ]
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={[ styles.text, styles.text1] /*[styles.text, {fontSize: 30}]*/}
        >
          Bonjour,
        </Text>
        <Text style={ [styles.text, styles.text2] /*[styles.text, {textAlign: "center"}]*/}>je m'appelle</Text>
        <Text style={ [styles.text, styles.text3] /*[styles.text, {fontWeight: 900}]*/}>Chris</Text>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <Image source={{uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"}} style={styles.logo} />
        <Pressable onPress={handleAlert}>
          <Text>Alert</Text>
        </Pressable>
        <ActivityIndicator size="large" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: "white",
    height: 1200
  },
  text: {
    marginVertical: 80
  },
  text1: {
    fontSize: 30
  },
  text2: {
    textAlign: "center"
  },
  text3: {
    fontWeight: "bold"
  },
  logo: {
    width: 200,
    height: 60
  }
});
