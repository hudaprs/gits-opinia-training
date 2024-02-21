// React Navigation
import { NavigationContainer } from '@react-navigation/native'

// Navigations
import { AppRootStackNavigation } from '@/features/app/navigations/Stack'

const EntryPoint = () => {
	return (
		<NavigationContainer>
			<AppRootStackNavigation />
		</NavigationContainer>
	)
}

export { EntryPoint }
