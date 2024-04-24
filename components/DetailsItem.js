import { Image, Platform, StyleSheet, Text, View } from "react-native";

function DetailsItem({ steps }) {
  return (
    <View style={styles.mealItem}>
      <Text style={styles.title}>STEPS {steps}</Text>
    </View>
  );
}

export default DetailsItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  //   innerContainer: {
  //     borderRadius: 8,
  //     overflow: "hidden",
  //   },
  //   image: {
  //     width: "100%",
  //     height: 200,
  //   },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "blue",
  },
  //   details: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     padding: 8,
  //     justifyContent: "center",
  //   },
  //   detailsItem: {
  //     marginHorizontal: 4,
  //     fontSize: 14,
  //   },
  //   buttenPressed: {
  //     opacity: 0.5,
  //   },
});
