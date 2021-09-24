import {createStackNavigator} from '@react-navigation/native-stack';
import { routes as alteRoutes } from './src/navigation/Routes';

const routes={
    ...alteRoutes,
};
export const AppNavigator=createStackNavigator(routes);