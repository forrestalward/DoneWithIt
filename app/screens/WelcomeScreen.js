import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      {/* Logo and Text */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      {/* Login Buttons */}
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
