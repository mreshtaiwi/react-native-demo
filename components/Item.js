import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item(props) {
    return (
        <View>
            <Text onPress={() => props.onDelete(props.title)} >
                {props.title}
            </Text>
        </View>
    )
}