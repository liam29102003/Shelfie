import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.png";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={[styles.title]}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading list app</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    // fontFamily: "Montserrat-Regular",
    fontSize: 22,
  },

  img: {
    marginVertical: 20,
  },
});
