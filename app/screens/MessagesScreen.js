import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import { FlatList } from "react-native-web";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/headphones.jpg"),
  },
  {
    id: 2,
    title: "T1",
    description: "D1",
    image: require("../assets/headphones.jpg"),
  },
];

export default function MessagesScreen({ ItemSeperatorComponent }) {
  return (
    <View>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        >
          MessagesScreen
        </FlatList>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({});
