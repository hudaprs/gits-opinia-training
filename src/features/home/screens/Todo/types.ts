// React Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Types
import { HomeStackNavigationParams } from '@/features/home/navigations/Stack/types'

export type HomeTodoScreenProps =
	NativeStackNavigationProp<HomeStackNavigationParams>

export type Todo = {
	id: number
	title: string
	completed: boolean
}
