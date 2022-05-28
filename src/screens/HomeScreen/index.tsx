import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <View>
            {/* Render Product Component */}
            <View style={styles.root}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
                    }}
                />
                <View>
                    <Text>
                        Clean Architecture: A Craftsman's Guide to Software
                        Structure and Design
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {},
    image: {
        width: 250,
        height: 250,
    },
});

export default HomeScreen;
