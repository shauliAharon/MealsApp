import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import DetailsItem from "../components/DetailsItem";

function DetailsMealScreen({ route, navigation }) {
  // return<Text>DetailsMealScreen</Text>
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((DetailsItems) => {
    return DetailsItems.categoryIds.indexOf(catId) >= 0;
  });

  //   useLayoutEffect(() => {
  //     const categoryTitle = CATEGORIES.find(
  //       (category) => category.id === catId
  //     ).title;
  //     navigation.setOptions({
  //       title: categoryTitle,
  //     });
  //   }, [catId, navigation]);
  console.log(catId);
  console.log(displayedMeals);
  function renderDetailsItem(itemData) {
    navigation.navigate({
      categoryId: itemData.item.id,
    });
    const DetailsItemProps = {
      title: itemData.item.title,
      //   steps: itemData.item.steps,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    console.log(DetailsItemProps);
    return <DetailsItem steps={itemData.item.steps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderDetailsItem}
      />
    </View>
  );
}
export default DetailsMealScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
