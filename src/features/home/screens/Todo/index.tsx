// React Native
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// React Navigation
import {useNavigation} from '@react-navigation/native';

// Types
import {HomeTodoScreenProps} from './types';

// Enums
import {HomeStackNavigation} from '@/features/app/enums/navigation.enum';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0C356A',
    padding: 10,
    borderRadius: 8,
  },
  textWhite: {
    color: '#fff',
  },
});

const HomeTodoScreen = () => {
  // Navigation
  const navigation = useNavigation<HomeTodoScreenProps>();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(HomeStackNavigation.ENTRY)}>
          <Text style={styles.textWhite}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {HomeTodoScreen};
