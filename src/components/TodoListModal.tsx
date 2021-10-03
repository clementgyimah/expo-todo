import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addTodo } from '../functions/addTodo';
import { todoListModalStyle } from '../assets/styles/styles';

export default function TodoListModal({ ...props }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const saveTodo = () => {
        if (title.length <= 0) setTitleError(true);
        else if (content.length <= 0) setContentError(true);
        else {
            addTodo({title, content});
            clearInputs();
        }
    };

    const resetInputErrors = () => {
        if (titleError) return setTitleError(false);
        if (contentError) return setContentError(false);
    };

    const clearInputs = () => {
        setTitle('');
        setContent('');
    };

    const titleInputFunc = (theTitle: string) => {
        setTitle(theTitle);
        resetInputErrors();
    };

    const contentInputFunc = (theContent: string) => {
        setContent(theContent);
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
                        <View style={titleError ?
                            todoListModalStyle.inputViewError :
                            todoListModalStyle.inputView}>
                            <TextInput
                                style={todoListModalStyle.titleInput}
                                placeholder='Title'
                                value={title}
                                onChangeText={(theTitle) => titleInputFunc(theTitle)}
                            />
                            <Text style={todoListModalStyle.requiredText}>*</Text>
                        </View>
                        {
                            titleError &&
                            <Text style={todoListModalStyle.inputErrorText}>'Title' cannot be empty</Text>
                        }
                        <View style={contentError ?
                            todoListModalStyle.inputViewError :
                            todoListModalStyle.inputView}>
                            <TextInput
                                style={todoListModalStyle.contentInput}
                                placeholder='Text'
                                value={content}
                                onChangeText={(theContent) => contentInputFunc(theContent)}
                                multiline
                            />
                            <Text style={todoListModalStyle.requiredText}>*</Text>
                        </View>
                        {
                            contentError &&
                            <Text style={todoListModalStyle.inputErrorText}>'Content' cannot be empty</Text>
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