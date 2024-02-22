// Testing Library
import { fireEvent, render, screen } from '@testing-library/react-native'

// Components
import { HomeEntryScreen } from '@/features/home/screens/Entry'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native')
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: mockedNavigate
		})
	}
})

it('HomeEntryScreen should be rendered', () => {
	render(
		<NavigationContainer>
			<HomeEntryScreen />
		</NavigationContainer>
	)
})

it('HomeEntryScreen have button navigate to Todo Button', () => {
	render(
		<NavigationContainer>
			<HomeEntryScreen />
		</NavigationContainer>
	)

	const buttonEl = screen.getByText('Go To Todo')
	expect(buttonEl).toBeOnTheScreen()
	fireEvent.press(buttonEl)

	expect(mockedNavigate).toHaveBeenCalled()
})

it('HomeEntryScreen have button navigate to Native Button', () => {
	render(
		<NavigationContainer>
			<HomeEntryScreen />
		</NavigationContainer>
	)

	const buttonEl = screen.getByText('Go To Native')
	expect(buttonEl).toBeOnTheScreen()
	fireEvent.press(buttonEl)

	expect(mockedNavigate).toHaveBeenCalled()
})
