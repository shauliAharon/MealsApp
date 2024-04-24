import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MeatItem({
  title,
  steps,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttenPressed : null]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}> {duration} M</Text>
            <Text style={styles.detailsItem}> {complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
            {/* <Text>STEPS {steps}</Text> */}
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MeatItem;
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
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
  buttenPressed: {
    opacity: 0.5,
  },
});
