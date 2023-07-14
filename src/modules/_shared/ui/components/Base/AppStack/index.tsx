import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createStackNavigator();
const AppStack = withLayoutContext<StackNavigationOptions,
        typeof Navigator>(Navigator);

export default AppStack;