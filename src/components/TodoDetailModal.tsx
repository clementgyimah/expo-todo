import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TodoDetailModalStyle } from '../assets/styles/styles';

export default function TodoDetailModal({ ...props }) {

    const closeDetailModal = () => {
        props.closeModal();
    }

    return (
        <TouchableOpacity
            style={props.showModal ? TodoDetailModalStyle.container : TodoDetailModalStyle.containerNull}
            activeOpacity={1}
            onPress={() => closeDetailModal()}>
            <TouchableOpacity 
            style={TodoDetailModalStyle.modalContainer}
            onPress={() => null}
            activeOpacity={1}>
                <View>
                    <Text>h</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}