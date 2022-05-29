import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />);
    expect(tree).toMatchSnapshot();
});

it('has 1 child', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    // @ts-ignore: Object is possibly 'null'
    expect(tree.children.length).toBe(1);
});
