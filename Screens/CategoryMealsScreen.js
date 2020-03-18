import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {globalStyles, headerStyle} from '../Global/Styles';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const id = props.navigation.getParam('id');
  let Category = CATEGORIES.find(cat => cat.id === id);
  console.log(Category);
  console.log(id);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textCenter}>{Category.title}</Text>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});

CategoryMealsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id')
  const category = CATEGORIES.find(cat => cat.id === id)
  return {
    headerTitle: category.title,
    headerStyle: {
      ...headerStyle
    }
  }
}



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
