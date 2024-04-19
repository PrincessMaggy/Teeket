import { StyleSheet, Dimensions } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";
import { fontSizes } from "../utility/themes/sizes";

export const LandingStyles = StyleSheet.create({
  bgImageContainer: {
    flex: 1,
    resizeMode: "stretch",
    alignContent: "center",
    alignItems: "center",
    minHeight: Dimensions.get("window").height,
    gap: spacing.lg,
    paddingTop: spacing.xxxl,
  },
  overlayView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor:
      "linearGradient(180deg,rgba(3, 10, 46, 0.71) 0.01%, rgba(5, 12, 47, 0) 141.96%)",
  },
  logo: {
    width: Dimensions.get("window").width,
    height: 90,
    marginBottom: spacing.lg,
  },
  btn: {
    backgroundColor: colorTheme.brand.primary,
    height: 100,
  },
  paragraph: {
    color: colorTheme.text.inverse,
    fontSize: fontSizes.md,
    marginTop: spacing.md,
  },
});
