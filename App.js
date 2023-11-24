import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles}>
      <StatusBar style="auto" />
      <Text>Hello Ansar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
