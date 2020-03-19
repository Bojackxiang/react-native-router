import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {globalStyles, headerStyle} from '../Global/Styles';
import {CATEGORIES} from '../data/dummy-data';
import {meals} from '../data/dummy-meals';
import MealItem from '../Components/MealItem';

const CategoryMealsScreen = props => {
  const cateId = props.navigation.getParam('id');

  const displayList = meals.filter(
    item => item.categoryIds.indexOf(cateId) >= 0,
  );


  const renderedMeals = renderedItem => {
    console.log(renderedItem)
    return (
      <MealItem
        item={renderedItem}
        onSelectMeal={() => {
          props.navigation.navigate({routeName: 'MealDetailScreen', params: {mealId: renderedItem.item.id}});
        }}></MealItem>
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList data={displayList} renderItem={renderedMeals}></FlatList>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});

CategoryMealsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id');
  const category = CATEGORIES.find(cat => cat.id === id);
  return {
    headerTitle: category.title,
  };
};

// // * 除了navigate还能用push
//         但是push可以在当前页面然后跑到当前页面
//         props.navigation.navigate({routerName:"MealDetailScreen"})
//         */}
//         <Button
//         title="go to the detail"
//         onPress={() => {
//           props.navigation.push({routerName: 'MealDetailScreen'});
//         }}
//       />
//       <Button onPress={props.navigation.goBack()}>Go Back</Button>
//       <Button onPress={props.navigation.popToTop()}>Pop top</Button>
//       {/* replace之后了就没有back */}
//       <Button onPress={props.navigation.replace()}>Replace</Button>
