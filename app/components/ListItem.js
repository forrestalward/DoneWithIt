import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.listTextContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    fontWeight: "500",
    color: colors.medium,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listTextContainer: {
    flexDirection: "column",
  },
});
