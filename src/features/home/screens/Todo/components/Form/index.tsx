// React
import {memo, useCallback, useState} from 'react';

// React Native
import {Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// Types
import {FormProps} from './types';

const styles = StyleSheet.create({
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
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});

const Form = memo(({onSubmit}: FormProps) => {
  // Common State
  const [todo, setTodo] = useState<string>('');

  /**
   * @description Handle submit form
   *
   * @param {string} form
   *
   * @return {void} void
   */
  const onPressButton = useCallback(
    async (form: string): Promise<void> => {
      try {
        await onSubmit(form);

        setTodo('');
      } finally {
        //
      }
    },
    [onSubmit],
  );

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done..."
        autoFocus={false}
        onChangeText={setTodo}
        value={todo}
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonSubmit]}
        onPress={() => onPressButton(todo)}>
        <Text style={[styles.textWhite, styles.buttonText]}>Submit</Text>
      </TouchableOpacity>
    </>
  );
});

Form.displayName = 'Form';

export {Form};
