import { Image, Platform, StyleSheet, Text, View } from "react-native";

function DetailsItem({ duration, complexity, affordability ,style,textStyle}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem,textStyle]}> {duration} M</Text>
      <Text style={[styles.detailsItem,textStyle]}> {complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem,textStyle]}>{affordability.toUpperCase()}</Text>
      {/* <Text>STEPS {steps}</Text> */}
    </View>
  );
}

export default DetailsItem;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
