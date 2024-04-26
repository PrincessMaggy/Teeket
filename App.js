import {
  SafeAreaView,
  StatusBar,
  LogBox,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";

import { MainNav } from "./src/navigation/MainNav";
import * as Sentry from "@sentry/react-native";
import { colorTheme } from "./src/utility/themes/colors";
import * as Font from "expo-font";

Sentry.init({
  dsn: "https://d2f24b86e8003303be164a5da008d4d9@o4507038565662720.ingest.us.sentry.io/4507147909267456",
});

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Manrope: require("./assets/fonts/Manrope-Regular.ttf"),
        ManropeBold: require("./assets/fonts/Manrope-Bold.ttf"),
      });
    }
    loadFonts().then(() => setFontLoaded(true));
  }, []);

  LogBox.ignoreAllLogs();

  if (!fontLoaded) {
    <ActivityIndicator
      style={styles.loader}
      color={colorTheme.brand.primary}
    />;
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <MainNav />
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
  },
});
export default Sentry.wrap(App);
