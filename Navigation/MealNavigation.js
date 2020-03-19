import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import {headerStyle} from '../Global/Styles';




const AppNavigation = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMealsScreen: {
      screen: CategoryMealsScreen,
    },
    MealDetailScreen: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      initialRouteName: 'weijie xiang',
      // headerTintColor: 'red' => change the color of the title
      headerStyle: {
        ...headerStyle,
      },
    },
  },
);




export default createAppContainer(AppNavigation);
