// Testing Library
import { render } from '@testing-library/react-native'

// Components
import { AppRootStackNavigation } from '@/features/app/navigations/Stack'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

it('AppRootStackNavigation should be rendered', () => {
	render(
		<NavigationContainer>
			<AppRootStackNavigation />
		</NavigationContainer>
	)
})
