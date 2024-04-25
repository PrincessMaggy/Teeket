import { SafeAreaView, StatusBar } from "react-native";

import { MainNav } from "./src/navigation/MainNav";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <MainNav />
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    </SafeAreaView>
  );
}
