import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {globalStyles} from '../Global/Styles';

const CategoriesScreen = props => {
  console.log(props);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textCenter}>category screen</Text>
      <Button
        title="go to another page"
        onPress={() => {
          props.navigation.navigate('CategoryMealsScreen')
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
