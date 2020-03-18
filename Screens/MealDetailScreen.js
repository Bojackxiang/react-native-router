import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles, headerStyle} from '../Global/Styles';

const MealDetailScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textCenter}>MealDetailScreen</Text>
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
