// React Native
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet
	// TouchableOpacity,
	// Image,
	// Button
} from 'react-native'
// import { MessageModule, NativeImageView } from './message_module'

const styles = StyleSheet.create({
	container: {
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#ddd'
	},
	image: {
		width: 150,
		height: 150,
		objectFit: 'contain',
		borderRadius: 100,
		borderColor: '#dedede',
		borderWidth: 2
	}
})

const NativeHomeScreen = () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Message Module</Text>
				<View style={{ height: 10 }}></View>
				{/* <Button
					onPress={() => {
						const message = MessageModule.createMessageEvent(
							'This is native message'
						)
					}}
					title='Show Message from Native Module'
				/>
				<View style={{ height: 40 }}></View>
				<Text>Image From Javascript/Typescript</Text>
				<View style={{ height: 10 }}></View>
				<Image
					source={{
						uri: 'https://opinia.id/_next/static/media/opinia-logo.5700e9ff.png'
					}}
					style={styles.image}
				/>
				<View style={{ height: 40 }}></View>
				<Text>Image From Android Native</Text>
				<View style={{ height: 10 }}></View>
				<NativeImageView
					style={styles.image}
					resizeMode='contain'
					src={[
						{
							uri: 'https://opinia.id/_next/static/media/opinia-logo.5700e9ff.png'
						}
					]}
				/> */}
			</View>
		</SafeAreaView>
	)
}

export { NativeHomeScreen }
