import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {globalStyles} from '../Global/Styles'

const CategoryMealsScreen = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textCenter}>CategoryMealsScreen</Text>
            <Button title="go to the detail" onPress={() => {
                props.navigation.navigate("MealDetailScreen")
            }}/>
        </View>
    )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({})
