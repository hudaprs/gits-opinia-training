// React Native
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';
import { MessageModule, NativeImageView } from './message_module';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: 150,
        height: 150,
        objectFit: "contain",
        borderRadius: 500,
        borderColor: "#dedede",
        borderWidth: 2,
    }
});

const NativeHomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Message Module</Text>
                <View style={{ height: 10 }}></View>
                <Button
                    onPress={() => MessageModule.createMessageEvent("This is native message")}
                    title='Show Message from Native Module'
                />
                <View style={{ height: 40 }}></View>
                <Text>Image From Javascript/Typescript</Text>
                <View style={{ height: 10 }}></View>
                <Image
                    source={{ uri: "https://gits.id/wp-content/uploads/2023/02/cropped-Favicon-GITS-2.webp" }}
                    style={styles.image}
                />
                <View style={{ height: 40 }}></View>
                <Text>Image From Android Native</Text>
                <View style={{ height: 10 }}></View>
                <NativeImageView
                    style={styles.image}
                    src={[{ uri: "https://gits.id/wp-content/uploads/2023/02/cropped-Favicon-GITS-2.webp" }]}
                    borderRadius={20}
                />
            </View>
        </SafeAreaView>
    );
};

export { NativeHomeScreen };
