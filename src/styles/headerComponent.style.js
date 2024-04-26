import { StyleSheet } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";

export const HeaderComponentStyles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.sm,
    paddingBottom: 0,
  },
  btn: {
    backgroundColor: colorTheme.brand.tertiary,
    height: 50,
    padding: spacing.sm / 2,
    borderRadius: 10,
    fontFamily: "Manrope",
  },
  hr: {
    borderBottomColor: colorTheme.brand.muted,
    borderBottomWidth: 1,
    marginVertical: spacing.sm,
  },
});
