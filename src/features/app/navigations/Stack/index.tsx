// React Navigation - Stack Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigations
import {HomeStackNavigation} from '@/features/home/navigations/Stack';

// Types
import {AppRootStackNavigationParams} from './types';

// Enums
import {AppStackNavigation} from '@/features/app/enums/navigation.enum';

const Stack = createNativeStackNavigator<AppRootStackNavigationParams>();
const AppRootStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={AppStackNavigation.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={AppStackNavigation.HOME}
        component={HomeStackNavigation}
      />
    </Stack.Navigator>
  );
};

export {AppRootStackNavigation};
