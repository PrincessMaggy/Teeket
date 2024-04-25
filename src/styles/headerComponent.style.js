import { StyleSheet } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";

export const HeaderComponentStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.sm,
  },
  btn: {
    backgroundColor: colorTheme.brand.tertiary,
    height: 50,
    padding: spacing.sm / 2,
    borderRadius: 10,
  },
});
