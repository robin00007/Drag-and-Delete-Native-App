import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HorizontalScroll from "./components/HorizontalScroll";
import DeleteCard from "./components/deleteCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <HorizontalScroll />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "smokeWhite",
  },
  mainContainer: {
    margin: 5,
    marginTop: 30,
    width: "100%",
    height: "100%",
  },
});
