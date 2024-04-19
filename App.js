import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home.screen";
import { Landing } from "./src/screens/Landing.screen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <Landing />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
