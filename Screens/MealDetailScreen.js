import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles, headerStyle} from '../Global/Styles';

const MealDetailScreen = (props) => {
  const id = props.navigation.getParam(id)
  console.log(id)
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textCenter}>MealDetailScreen - {id}</Text>
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
  headerTitle: 'Meal Options',
  headerStyle: {
    ...headerStyle,
  },
};

export default MealDetailScreen;
