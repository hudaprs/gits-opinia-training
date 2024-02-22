// Testing Library
import {
	fireEvent,
	render,
	screen,
	waitFor
} from '@testing-library/react-native'

// Components
import { HomeTodoScreen } from '@/features/home/screens/Todo'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

// React Native
import { Platform } from 'react-native'

// Axios
import axios from 'axios'

jest.mock('react-native/Libraries/Utilities/Platform', () => {
	const platform: { OS: string; select: any } = {
		OS: 'ios',
		select: null
	}

	const select = jest.fn().mockImplementation(obj => {
		const value = obj[platform.OS]
		return !value ? obj.default : value
	})

	platform.select = select

	return platform
})

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

it('HomeTodoScreen should be rendered', () => {
	render(
		<NavigationContainer>
			<HomeTodoScreen />
		</NavigationContainer>
	)
})

describe('Conditional Style Specific Device', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('Android', () => {
		Platform.OS = 'android'

		const { getByTestId } = render(
			<NavigationContainer>
				<HomeTodoScreen />
			</NavigationContainer>
		)

		const flatList = getByTestId('flatList')

		expect(flatList.props.contentContainerStyle).toEqual({ paddingBottom: 20 })
	})

	it('IOS', () => {
		Platform.OS = 'ios'

		const { getByTestId } = render(
			<NavigationContainer>
				<HomeTodoScreen />
			</NavigationContainer>
		)

		const flatList = getByTestId('flatList')

		expect(flatList.props.contentContainerStyle).toEqual({
			paddingBottom: undefined
		})
	})
})

it('Load data first time when access to component', async () => {
	const fetchTodoListMock = jest.spyOn(axios, 'get').mockResolvedValueOnce({
		data: [
			{
				userId: 1,
				id: 1,
				title: 'delectus aut autem',
				completed: false
			}
		]
	})

	const { getByText } = render(
		<NavigationContainer>
			<HomeTodoScreen />
		</NavigationContainer>
	)

	await waitFor(() => {
		expect(getByText('delectus aut autem')).toBeDefined()
	})

	expect(fetchTodoListMock).toHaveBeenCalled()
})

jest.mock('axios')

it('Mutate data when user click submit button', async () => {
	const fetchTodoListMock = jest.spyOn(axios, 'get').mockResolvedValueOnce({
		data: [
			{
				userId: 1,
				id: 1,
				title: 'delectus aut autem',
				completed: false
			}
		]
	})

	const onAddTodoMock = jest.spyOn(axios, 'post').mockResolvedValueOnce({
		data: {
			id: Math.random(),
			title: 'new todo',
			completed: false
		}
	})

	const { getByText, getByPlaceholderText } = render(
		<NavigationContainer>
			<HomeTodoScreen />
		</NavigationContainer>
	)

	await waitFor(() => {
		expect(fetchTodoListMock).toHaveBeenCalled()
	})

	const input = getByPlaceholderText('What needs to be done...')
	fireEvent.changeText(input, 'new todo')

	const button = getByText('Submit')
	fireEvent.press(button, input.props.value)

	await waitFor(() => {
		expect(onAddTodoMock).toHaveBeenCalled()
	})
})

it('Redirect to Home', async () => {
	render(
		<NavigationContainer>
			<HomeTodoScreen />
		</NavigationContainer>
	)

	const button = screen.getByText('Go To Home')
	fireEvent.press(button)

	await waitFor(() => {
		expect(mockedNavigate).toHaveBeenCalled()
	})
})
