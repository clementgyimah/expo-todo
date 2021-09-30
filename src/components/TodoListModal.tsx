import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addTodo } from '../functions/addTodo';
import { todoListModalStyle } from '../assets/styles/styles';

export default function TodoListModal({ ...props }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [nameError, setNameError] = useState(false);
    const [textError, setTextError] = useState(false);

    const saveTodo = () => {
        if (name.length <= 0) setNameError(true);
        else if (text.length <= 0) setTextError(true);
        else {
            addTodo({name, text});
            clearInputs();
        }
    };

    const resetInputErrors = () => {
        if (nameError) return setNameError(false);
        if (textError) return setTextError(false);
    };

    const clearInputs = () => {
        setName('');
        setText('');
    };

    const nameInputFunc = (theName: string) => {
        setName(theName);
        resetInputErrors();
    };

    const textInputFunc = (theText: string) => {
        setText(theText);
        resetInputErrors();
    };

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
                        <View style={nameError ?
                            todoListModalStyle.inputViewError :
                            todoListModalStyle.inputView}>
                            <TextInput
                                style={todoListModalStyle.nameInput}
                                placeholder='Title'
                                value={name}
                                onChangeText={(theName) => nameInputFunc(theName)}
                            />
                            <Text style={todoListModalStyle.requiredText}>*</Text>
                        </View>
                        {
                            nameError &&
                            <Text style={todoListModalStyle.inputErrorText}>'Name' cannot be empty</Text>
                        }
                        <View style={textError ?
                            todoListModalStyle.inputViewError :
                            todoListModalStyle.inputView}>
                            <TextInput
                                style={todoListModalStyle.textInput}
                                placeholder='Text'
                                value={text}
                                onChangeText={(theText) => textInputFunc(theText)}
                                multiline
                            />
                            <Text style={todoListModalStyle.requiredText}>*</Text>
                        </View>
                        {
                            textError &&
                            <Text style={todoListModalStyle.inputErrorText}>'Text' cannot be empty</Text>
                        }
                        <View style={todoListModalStyle.saveButtonView}>
                            <TouchableOpacity
                                style={todoListModalStyle.saveButton}
                                activeOpacity={0.5}
                                onPress={() => saveTodo()}>
                                <Text style={todoListModalStyle.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}