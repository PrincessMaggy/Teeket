import { StyleSheet, Dimensions } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";
import { fontSizes } from "../utility/themes/sizes";

export const LandingStyles = StyleSheet.create({
  bgImageContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    minHeight: Dimensions.get("window").height,
    minWidth: Dimensions.get("window").width,
    gap: spacing.lg,
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
    height: 200,
    width: 200,
  },
  btn: {
    backgroundColor: colorTheme.brand.primary,
    height: 50,
    fontSize: fontSizes.lg,
    padding: spacing.sm / 2,
    borderRadius: 10,
  },
  btnval: {
    backgroundColor: colorTheme.bg.primary,
    height: 50,
    fontSize: fontSizes.lg,
    padding: spacing.sm / 2,
    borderRadius: 10,
  },
  paragraph: {
    color: colorTheme.text.inverse,
    marginTop: spacing.md,
    fontSize: fontSizes.md,
    textAlign: "center",
  },
  textContainer: {
    paddingHorizontal: spacing.lg,
    textAlign: "center",
  },
  centeredContainer: {
    alignItems: "center",
    maxWidth: Dimensions.get("window").width,
    padding: spacing.md,
    textAlign: "center",
  },
});
