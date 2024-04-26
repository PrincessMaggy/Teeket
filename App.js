import { SafeAreaView, StatusBar } from "react-native";

import { MainNav } from "./src/navigation/MainNav";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://d2f24b86e8003303be164a5da008d4d9@o4507038565662720.ingest.us.sentry.io/4507147909267456",
});

function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <MainNav />
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    </SafeAreaView>
  );
}

export default Sentry.wrap(App);
