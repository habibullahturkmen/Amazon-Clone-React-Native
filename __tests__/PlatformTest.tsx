import {Platform} from 'react-native';

jest.mock('react-native', () => ({
  Platform: {OS: 'android'},
}));

describe('React Native Platform', () => {
  test("Platform.OS should be 'android'", () => {
    expect(Platform.OS).toBe('android');
  });
});
