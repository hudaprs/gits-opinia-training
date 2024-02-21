// React Native
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

// React Navigation
import { useNavigation } from '@react-navigation/native'

// Types
import { HomeEntryScreenProps } from './types'

// Enums
import { HomeStackNavigation } from '@/features/app/enums/navigation.enum'

const styles = StyleSheet.create({
	header: {
		padding: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	button: {
		backgroundColor: '#0C356A',
		padding: 10,
		borderRadius: 8
	},
	textWhite: {
		color: '#fff'
	}
})

const HomeEntryScreen = () => {
	// Navigation
	const navigation = useNavigation<HomeEntryScreenProps>()

	return (
		<SafeAreaView>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate(HomeStackNavigation.TODO)}
				>
					<Text style={styles.textWhite}>Go To Todo</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate(HomeStackNavigation.NATIVE)}
				>
					<Text style={styles.textWhite}>Go To Native</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export { HomeEntryScreen }
