// React
import { memo } from 'react'

// React Native
import { Text } from 'react-native'

const HomeEntryScreen = memo(() => {
	return <Text>Hello World</Text>
})

HomeEntryScreen.displayName = 'HomeEntryScreen'

export { HomeEntryScreen }
