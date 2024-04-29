import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const favoritMealsCtx = useContext(FavoritesContext);
  const favoritMeals = MEALS.filter((meal) =>
    favoritMealsCtx.ids.includes(meal.id)
  );
  if (favoritMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favorite Meals Yet</Text>
      </View>
    );
  }
  return <MealsList items={favoritMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
