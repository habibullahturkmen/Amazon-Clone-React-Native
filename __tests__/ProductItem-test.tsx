import 'react-native';
import React from 'react';
import ProductItem from '../src/components/ProductItem';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <ProductItem
            item={{
                id: '1',
                title: 'New Book',
                image: '',
                avgRating: 10,
                ratings: 20,
                price: 100,
                oldPrice: 99,
            }}
        />,
    );
    expect(tree).toMatchSnapshot();
});

it('has 1 child', () => {
    const tree = renderer
        .create(
            <ProductItem
                item={{
                    id: '1',
                    title: 'New Book',
                    image: '',
                    avgRating: 10,
                    ratings: 20,
                    price: 100,
                    oldPrice: 99,
                }}
            />,
        )
        .toJSON();
    // @ts-ignore: Object is possibly 'null'
    expect(tree.children.length).toBe(2);
});
