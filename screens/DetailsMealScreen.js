import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import DetailsItem from "../components/DetailsItem";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import PrimaryButton from "../components/PrimaryButton";
import IconButton from "../components/IconButton";
import { Fontisto } from "@expo/vector-icons";
import FavoriteButton from "../components/FavoriteButton";
function DetailsMealScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("top meee");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <FavoriteButton
            onPress={headerButtonPressHandler}
            icon="favorite"
            color="white"
          ></FavoriteButton>
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <DetailsItem
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default DetailsMealScreen;
const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
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
