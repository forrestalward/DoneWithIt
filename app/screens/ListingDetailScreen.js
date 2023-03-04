import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailScreen({ props }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/headphones.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Beats by Dr. Dre</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/headphones.jpg")}
            title={"Forrie Alward Chutta Lover"}
            subTitle={"5 Listings"}
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginTop: 20,
  },
});
