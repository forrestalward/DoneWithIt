import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import { FlatList } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

const initalMessages = [
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

export default function MessagesScreen({ props }) {
  // Set state
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);

  // Delete Function
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
              onPress={() => console.log("message touchy")}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: "T1",
                description: "D1",
                image: require("../assets/headphones.jpg"),
              },
            ]);
          }}
        >
          MessagesScreen
        </FlatList>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({});
