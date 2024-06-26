import { StyleSheet, Dimensions } from "react-native";
import { colorTheme } from "../utility/themes/colors";
import { spacing } from "../utility/themes/sizes";
import { fontSizes } from "../utility/themes/sizes";

export const discoverEventStyles = StyleSheet.create({
  discoverContainer: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: Dimensions.get("window").width,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.sm,
  },
  searchBar: {
    minWidth: Dimensions.get("window").width - spacing.xxxl,
    marginRight: spacing.sm,
    backgroundColor: "rgba(16, 16, 16, 0.05)",
    fontFamily: "Manrope",
  },
  textTitle: {
    marginTop: spacing.md,
    fontSize: 20,
    marginBottom: spacing.md,
    fontFamily: "Manrope",
  },
  sectionContainer: {
    padding: spacing.sm,
  },
  fourTabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    justifyContent: "space-between",
    marginTop: spacing.md,
  },
  tabOne: {
    backgroundColor: "#FBBF0A",
    borderRadius: spacing.md,
    padding: spacing.md,
    gap: spacing.sm,
    width: 164,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tabFour: {
    backgroundColor: "#FFC971",
    borderRadius: spacing.md,
    padding: spacing.md,
    gap: spacing.sm,
    width: 164,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tabTwo: {
    backgroundColor: "#EEE",
    borderRadius: spacing.md,
    padding: spacing.md,
    gap: spacing.sm,
    width: 164,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tabThree: {
    backgroundColor: "#B0E298",
    borderRadius: spacing.md,
    padding: spacing.md,
    gap: spacing.sm,
    width: 164,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  discoverCard: {
    flexDirection: "row",
    width: Dimensions.get("window").width - spacing.md,
    height: 200,
    borderRadius: spacing.md,
    justifyContent: "space-between",
    gap: spacing.sm,
    borderColor: "#F1F1F1",
    borderWidth: spacing.sm / 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: spacing.sm,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Elevation for Android (overrides shadow properties)
    padding: 20,
    marginTop: spacing.md,
  },
  cardImg: {
    width: 160,
    height: 160,
    borderRadius: spacing.md,
  },
  btnDiscover: {
    backgroundColor: "#E1E4EB",
    borderRadius: spacing.md,
    width: Dimensions.get("window").width - spacing.md,
    marginTop: spacing.md,
    height: 50,
    padding: spacing.sm / 2,
    fontFamily: "Manrope",
  },
  date: {
    textTransform: "uppercase",
    color: "#989898",
    padding: spacing.sm,
    fontFamily: "Manrope",
  },
  cost: {
    color: "rgba(255, 3, 3, 1)",
    backgroundColor: "rgba(255, 9, 9, 0.13)",
    padding: spacing.sm,
    width: spacing.mxxl,
    textAlign: "center",
    fontFamily: "Manrope",
  },
  title: {
    fontWeight: 700,
    width: 160,
    fontSize: 20,
    margin: spacing.sm,
    fontFamily: "ManropeBold",
  },
  location: {
    color: "#4D4D4D",
    fontFamily: "Manrope",
  },
  covener: { color: "#4D4D4D", fontFamily: "Manrope" },
});
