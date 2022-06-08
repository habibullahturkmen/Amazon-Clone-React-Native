import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import products from '../../data/products';
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/* Render Product Component */}
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
});

export default HomeScreen;
