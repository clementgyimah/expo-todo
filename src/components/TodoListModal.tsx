import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { todoListModalStyle } from '../assets/styles/styles';

export default function TodoListModal({ ...props }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    return (
        <TouchableOpacity
            onPress={() => props.closeModal()}
            activeOpacity={1}
            style={
                props.showModal ?
                    todoListModalStyle.container :
                    todoListModalStyle.disableModal}>
            <TouchableOpacity
                style={todoListModalStyle.addTodoContainer}
                activeOpacity={1}>
                <View style={todoListModalStyle.titleView}>
                    <Text style={todoListModalStyle.titleText}>
                        Add a Todo
                    </Text>
                </View>
                <View style={todoListModalStyle.contentView}>
                    <ScrollView>
                        <TextInput
                            style={todoListModalStyle.nameInput}
                            placeholder='Name'
                        // value={name}
                        />
                        <TextInput
                            style={todoListModalStyle.textInput}
                            placeholder='Text'
                            multiline
                        />
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}