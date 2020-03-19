import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {globalStyles, headerStyle} from '../Global/Styles';

const CategoriesScreen = props => {
  // -> rendered items
  const renderData = renderedItem => {
    return (
      <View style={styles.gridItem}>
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
  // return <Text>hello</Text>
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
  },
  gridText: {
    margin: 10,
  },
});

// * 增加header
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Options',
  
};
