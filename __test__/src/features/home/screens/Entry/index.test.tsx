// Testing Library
import {render} from '@testing-library/react-native';

// Components
import {HomeEntryScreen} from '@/features/home/screens/Entry';

// React Navigation
import {NavigationContainer} from '@react-navigation/native';

it('HomeEntryScreen should be rendered', () => {
  render(
    <NavigationContainer>
      <HomeEntryScreen />
    </NavigationContainer>,
  );
});
