// Testing Library
import {render} from '@testing-library/react-native';

// Components
import {HomeTodoScreen} from '@/features/home/screens/Todo';

// React Navigation
import {NavigationContainer} from '@react-navigation/native';

it('HomeTodoScreen should be rendered', () => {
  render(
    <NavigationContainer>
      <HomeTodoScreen />
    </NavigationContainer>,
  );
});
