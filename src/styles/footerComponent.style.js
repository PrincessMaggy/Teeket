import { StyleSheet } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";

export const FooterComponentStyles = StyleSheet.create({
  contactView: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  contactViewCont: {
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  policyView: {
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  menuView: {
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },

  hr: {
    borderBottomColor: colorTheme.brand.muted,
    borderBottomWidth: 1,
    marginVertical: spacing.sm,
  },
  ctaContainer: {
    backgroundColor: colorTheme.bg.cta,
    color: colorTheme.text.inverse,
    padding: spacing.lg,
    marginTop: spacing.mxxl,
    gap: spacing.sm,
  },
  textStyle: {
    color: colorTheme.text.inverse,
  },
});
