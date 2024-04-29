import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ icon, onPress, style, color }) {
  return (
    <View style={[styles.iconOuterContainer]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.iconInnerContainer, styles.pressed]
            : styles.iconInnerContainer
        }
        onPress={onPress}
        // android_ripple={{ color: "white" }}
      >
        <Ionicons style={[style]} name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  iconOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  iconInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  pressed: {
    opacity: 0.75,
  },
});
