import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';

const AppNavigation = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMealsScreen: {
    screen: CategoryMealsScreen,
  },
  MealDetailScreen: {
    screen: MealDetailScreen,
  },
});

export default createAppContainer(AppNavigation);
