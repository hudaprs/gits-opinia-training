// React
import {useState, useCallback, useEffect, useMemo} from 'react';

// React Native
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
  ViewStyle,
} from 'react-native';

// React Navigation
import {useNavigation} from '@react-navigation/native';

// Types
import {HomeTodoScreenProps, Todo} from './types';

// Enums
import {HomeStackNavigation} from '@/features/app/enums/navigation.enum';

// Components
import {Form} from './components/Form';
import {Item} from './components/Item';

// Axios
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
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
  buttonSubmit: {
    width: 150,
  },
  buttonText: {
    textAlign: 'center',
  },
  textWhite: {
    color: '#fff',
  },
  textIndigo: {
    color: '#0C356A',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '700',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 10,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  listWrapper: {
    flex: 1,
  },
  itemDivider: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 10,
  },
  itemWrapper: {
    marginTop: 5,
    padding: 5,
  },
});

const HomeTodoScreen = () => {
  // Common State
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // Navigation
  const navigation = useNavigation<HomeTodoScreenProps>();

  // Memoized Value for FlatList
  const memoizedContentContainerStyle = useMemo((): ViewStyle => {
    return {
      paddingBottom: Platform.OS === 'android' ? 20 : undefined,
    };
  }, []);

  /**
   * @description Fetch todo list
   *
   * @return {Promise<void>} Promise<void>
   */
  const fetchTodoList = useCallback(async (): Promise<void> => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {_limit: 10},
        },
      );
      const realResponse = response.data as Todo[];

      setTodoList(realResponse);
    } catch (_) {
      //
    }
  }, []);

  /**
   * @description Add todo handler
   *
   * @param {string} form
   *
   * @return {Promise<void>} Promise<void>
   */
  const onAddTodo = useCallback(async (form: string): Promise<void> => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title: form,
          completed: false,
        },
      );
      const realResponse = response.data as Todo;

      setTodoList(prev => [
        {...realResponse, title: form, completed: false},
        ...prev,
      ]);
    } catch (_) {
      //
    }
  }, []);

  // Do when user came to this screens
  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(HomeStackNavigation.ENTRY)}>
            <Text style={styles.textWhite}>Go To Home</Text>
          </TouchableOpacity>

          <Text style={[styles.textIndigo, styles.textHeader]}>Todo List</Text>
        </View>
        {/* End Header */}

        {/* Divider */}
        <View style={styles.divider} />
        {/* End Divider */}

        {/* Form */}
        <Form onSubmit={onAddTodo} />
        {/* End Form */}

        {/* List */}
        <FlatList
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={memoizedContentContainerStyle}
          data={todoList}
          renderItem={({item, index}) => (
            <>
              <View style={styles.itemWrapper}>
                <Item completed={item.completed} title={item.title} />
              </View>

              {todoList.length - 1 !== index && (
                <View style={styles.itemDivider} />
              )}
            </>
          )}
        />
        {/* End List */}
      </View>
    </SafeAreaView>
  );
};

export {HomeTodoScreen};
