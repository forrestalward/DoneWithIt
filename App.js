import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import "./app/assets/headphones.jpg";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
export default function App() {
  return <ListingDetailScreen />;
}
