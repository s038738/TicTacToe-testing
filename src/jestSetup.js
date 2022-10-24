
jest.mock('@react-navigation/native');
// jest.mock('@react-navigation/stack');

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: jest.fn(),
        dispatch: jest.fn(),
      }),
    };
  });

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
//jest.mock('NativeAnimatedHelp');

import 'react-native-gesture-handler/jestSetup';

//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});