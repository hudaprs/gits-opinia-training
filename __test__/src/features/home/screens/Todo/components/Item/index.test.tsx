// Testing Library
import { render } from '@testing-library/react-native'

// Components
import { Item } from '@/features/home/screens/Todo/components/Item'

it('Item should be rendered with style', () => {
	const { getByText } = render(<Item completed title='Title' />)

	const titleEl = getByText('Title')
	expect(titleEl).toBeDefined()
	expect(titleEl).toHaveStyle({ textDecorationLine: 'line-through' })
})

it('Item should be rendered no with style', () => {
	const { getByText } = render(<Item completed={false} title='Title' />)

	const titleEl = getByText('Title')
	expect(titleEl).toBeDefined()
	expect(titleEl).not.toHaveStyle({ textDecorationLine: 'line-through' })
})
