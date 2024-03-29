// React Navigation - Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Home Screens
import { HomeEntryScreen } from '@/features/home/screens/Entry'
import { HomeTodoScreen } from '@/features/home/screens/Todo'
import { NativeHomeScreen } from '@/features/home/screens/Native'

// Types
import { HomeStackNavigationParams } from './types'

// Enums
import { HomeStackNavigation as EHomeStackNavigation } from '@/features/app/enums/navigation.enum'

const Stack = createNativeStackNavigator<HomeStackNavigationParams>()
const HomeStackNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName={EHomeStackNavigation.ENTRY}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name={EHomeStackNavigation.ENTRY}
				component={HomeEntryScreen}
			/>
			<Stack.Screen
				name={EHomeStackNavigation.TODO}
				component={HomeTodoScreen}
			/>
			<Stack.Screen
				name={EHomeStackNavigation.NATIVE}
				component={NativeHomeScreen}
			/>
		</Stack.Navigator>
	)
}

export { HomeStackNavigation }
