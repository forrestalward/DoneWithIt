import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppText({ children, style }) {
  const [isNew, setisNew] = useState(false);
  return (
    <View style={[defaultStyles.text, style]}>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
}

export default AppText;
