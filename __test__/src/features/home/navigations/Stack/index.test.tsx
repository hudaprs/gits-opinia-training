// Testing Library
import { render } from '@testing-library/react-native'

// Components
import { HomeStackNavigation } from '@/features/home/navigations/Stack'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

it('HomeStackNavigation should be rendered', () => {
	render(
		<NavigationContainer>
			<HomeStackNavigation />
		</NavigationContainer>
	)
})
