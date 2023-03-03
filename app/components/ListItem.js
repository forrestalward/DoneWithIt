import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <View>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    with: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});
