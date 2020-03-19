import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {globalStyles, headerStyle} from '../Global/Styles';

const CategoriesScreen = props => {
  // -> rendered items
  const renderData = renderedItem => {
    return (
      <View style={{...styles.gridItem, backgroundColor: renderedItem.item.color,}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({routeName: 'CategoryMealsScreen', params: {id: renderedItem.item.id}});
          }}>
          <Text style={{...globalStyles.textCenter, ...styles.gridText}}>
            <Text>{renderedItem.item.title}</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
  gridItem: {
    flex: 1,
    margin: 15, 
    borderRadius: 10,
    height: 150,
    justifyContent: 'flex-end'
  },

  gridText: {
    textAlign: 'right',
    padding: 20, 
    fontSize: 20
  },
});

// * 增加header
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Options',
  
};
