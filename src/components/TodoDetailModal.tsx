import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TodoDetailModalStyle } from '../assets/styles/styles';

// modal component for showing 
export default function TodoDetailModal({ ...props }) {

    /**
     * function to close the modal
     */
    const closeDetailModal = () => {
        props.closeModal();
    }
    // console.log(props.todoDetailObject.item)
    return (
        <TouchableOpacity
            style={props.showModal ? TodoDetailModalStyle.container : TodoDetailModalStyle.containerNull}
            activeOpacity={1}
            onPress={() => closeDetailModal()}>
            <TouchableOpacity 
            style={TodoDetailModalStyle.modalContainer}
            onPress={() => null}
            activeOpacity={1}>
                <View style={TodoDetailModalStyle.titleView}>
                    <Text style={TodoDetailModalStyle.titleText}>{props.todoDetailObject.item.Title}</Text>
                </View>
                <View style={TodoDetailModalStyle.contentView}>
                    <ScrollView>
                        <Text style={TodoDetailModalStyle.contentText}>{props.todoDetailObject.item.Content}</Text>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
