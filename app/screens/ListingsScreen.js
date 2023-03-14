import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Headphones for Sale",
    price: 100,
    image: require("../assets/headphones.jpg"),
  },
  {
    id: 2,
    title: "Headphones for Sale 2",
    price: 1000,
    image: require("../assets/headphones.jpg"),
  },
];

export default function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"R" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
