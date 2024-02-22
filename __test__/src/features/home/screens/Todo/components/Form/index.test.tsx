// Testing Library
import { fireEvent, render, waitFor } from '@testing-library/react-native'

// Components
import { Form } from '@/features/home/screens/Todo/components/Form/index.tsx'

const mockFn = jest.fn(title => title)

it('Form should be rendered', () => {
	render(
		<Form
			onSubmit={async () => {
				mockFn('title')
			}}
		/>
	)
})

it('Form can be type by user', () => {
	const { getByPlaceholderText } = render(
		<Form
			onSubmit={async () => {
				mockFn('title')
			}}
		/>
	)

	const input = getByPlaceholderText('What needs to be done...')
	fireEvent.changeText(input, '123')
	expect(input.props.value).toBe('123')
})

it('Form can be submitted', async () => {
	const { getByText, getByPlaceholderText } = render(
		<Form
			onSubmit={async () => {
				mockFn('title')
			}}
		/>
	)

	const input = getByPlaceholderText('What needs to be done...')
	fireEvent.changeText(input, 'new todo')
	expect(input.props.value).toBe('new todo')

	const button = getByText('Submit')
	fireEvent.press(button, 'new todo')

	await waitFor(() => {
		expect(mockFn).toHaveBeenCalled()
	})

	expect(input.props.value).toBe('')
})
