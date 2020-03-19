import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles, headerStyle} from '../Global/Styles';
import {meals} from '../data/dummy-meals';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtn from '../Components/HeaderBtn';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedItem = meals.find(meal => meal.id === mealId);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textCenter}>{selectedItem.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

MealDetailScreen.navigationOptions = {
  // headerTitle: 'Meal Options',
  headerStyle: {
    ...headerStyle,
  },
};

MealDetailScreen.navigationOptions = navigationData => {
  return {
    headerTitle: navigationData.navigation.getParam('mealId'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="favourite"
          iconName="ios-star"
          onPress={() => {
            console.log('clicked');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;
