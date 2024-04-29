import { Pressable, StyleSheet, Text, View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
function FavoriteButton({ icon, onPress, style, color }) {
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
        <MaterialIcons style={[style]} name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
}
export default FavoriteButton;
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
