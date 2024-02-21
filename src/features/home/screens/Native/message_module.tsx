import {
	ImageSourcePropType,
	ImageStyle,
	NativeModules,
	StyleProp,
	requireNativeComponent
} from 'react-native'

const { MessageModule } = NativeModules

type NativeImageViewProps = {
	src: ImageSourcePropType
	borderRadius: number
	style: StyleProp<ImageStyle>
}

const NativeImageViewComponent = requireNativeComponent('NativeImageView')

const NativeImageView = (props: NativeImageViewProps) => {
	return (
		<>
			<NativeImageViewComponent {...props} />
		</>
	)
}

export { MessageModule, NativeImageView }
