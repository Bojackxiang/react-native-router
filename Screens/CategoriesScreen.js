import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {globalStyles, headerStyle} from '../Global/Styles';

const CategoriesScreen = props => {
  // -> rendered items
  const renderData = renderedItem => {
    return (
      <TouchableWithoutFeedback
      style={styles.touchOpacity}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMealsScreen',
            params: {id: renderedItem.item.id},
          });
        }}>
        <View
          style={{
            ...styles.gridItem,
            backgroundColor: renderedItem.item.color,
          }}>
          <Text style={{...globalStyles.textCenter, ...styles.gridText}}>
            <Text>{renderedItem.item.title}</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderData}
      numColumns={2}></FlatList>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  touchOpacity: {
    flex: 1
  },
  gridItem: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    height: 150,
    justifyContent: 'flex-end',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.6
  },

  gridText: {
    textAlign: 'right',
    padding: 20,
    fontSize: 20,
  },
});

// * 增加header
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Options',
};
