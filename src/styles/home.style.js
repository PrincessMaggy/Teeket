import { StyleSheet, Dimensions } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";

export const HomeStyles = StyleSheet.create({
  screenContainer: {
    margin: 0,
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  mainContainer: {
    padding: spacing.sm,
    alignItems: "center",
    gap: spacing.md,
  },
  googleImg: {
    width: 20,
    height: 20,
  },
  googleBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
    borderColor: colorTheme.bg.muted,
    borderWidth: 1,
    padding: spacing.sm,
    width: 300,
    borderRadius: spacing.sm,
    height: spacing.xxl,
    gap: spacing.md,
  },
  btnEmail: {
    backgroundColor: colorTheme.brand.primary,
    width: 300,
    borderRadius: spacing.sm,
    height: spacing.xxl,
  },
  inputEmail: {
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
    backgroundColor: colorTheme.bg.muted,
    padding: spacing.md,
    width: 300,
    borderRadius: spacing.sm,
    height: spacing.xxl,
    color: colorTheme.text.tertiary,
  },
  paragraph: {
    marginTop: spacing.md,
    textAlign: "center",
    color: colorTheme.text.tertiary,
  },
  hr2Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.sm,
  },
  hr2Line: {
    borderBottomColor: colorTheme.ui.secondary,
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: 5,
  },
  hr2Text: {
    color: colorTheme.ui.secondary,
    marginHorizontal: 10,
  },
  termsPolicyText: {
    fontWeight: "bold",
    color: colorTheme.brand.secondary,
    textDecorationLine: "underline",
  },
});
