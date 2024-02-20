// React
import {memo} from 'react';

// React Native
import {View, StyleSheet, Text} from 'react-native';

// Types
import {ItemProps} from './types';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#0C356A',
    fontSize: 12,
    fontWeight: '500',
  },
  completed: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});

const Item = memo(({completed, title}: ItemProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, completed ? styles.completed : undefined]}>
        {title}
      </Text>
    </View>
  );
});

Item.displayName = 'Item';

export {Item};
