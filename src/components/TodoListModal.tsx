import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addTodo } from '../functions/addTodo';
import { todoListModalStyle } from '../assets/styles/styles';
import { useDispatch } from 'react-redux';
import { addTodoReducer } from '../redux/features/todoFunc/todoSlice';
import UUID from 'react-native-uuid';

// modal for adding a todo
export default function TodoListModal({ ...props }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);

    /**
     * function to save a modal into the database
     * @returns function to close the modal
     */
    const saveTodo = () => {
        if (title.length <= 0) setTitleError(true);
        else if (content.length <= 0) setContentError(true);
        else {
            const id = UUID.v4();
            addTodo({
                id,
                title,
                content,
                addTodoDispatch: () => dispatch(addTodoReducer({ ID: id, Title: title, Content: content }))
            });
            clearInputs();
            return props.closeModal();
        }
    };

    /**
     * function for resetting all errors to 'false'
     * @returns reset each error to 'false' if it is set to 'true'
     */
    const resetInputErrors = () => {
        if (titleError) return setTitleError(false);
        if (contentError) return setContentError(false);
    };

    /**
     * function for clearing/emptying all inputs
     * @returns emptying the content input
     */
    const clearInputs = () => {
        setTitle('');
        return setContent('');
    };

    /**
     * function for handling 'title' input
     * @param theTitle current value in title input
     * @returns resetting all input errors
     */
    const titleInputFunc = (theTitle: string) => {
        setTitle(theTitle);
        return resetInputErrors();
    };

    /**
     * function for handling 'content' input
     * @param theContent current value in the content input
     * @returns resetting all input errors
     */
    const contentInputFunc = (theContent: string) => {
        setContent(theContent);
        return resetInputErrors();
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
                            <View style={todoListModalStyle.inputRow}>
                                <TextInput
                                    style={todoListModalStyle.titleInput}
                                    placeholder='Title'
                                    value={title}
                                    onChangeText={(theTitle) => titleInputFunc(theTitle)}
                                />
                                <Text style={todoListModalStyle.requiredText}>*</Text>
                            </View>
                            {
                                // show input error if 'titleError' state variable is set to 'true'
                                titleError &&
                                <Text style={todoListModalStyle.inputErrorText}>'Title' cannot be empty</Text>
                            }
                        </View>
                        <View style={contentError ?
                            todoListModalStyle.inputViewError :
                            todoListModalStyle.inputView}>
                            <View style={todoListModalStyle.inputRow}>
                                <TextInput
                                    style={todoListModalStyle.contentInput}
                                    placeholder='Content'
                                    value={content}
                                    onChangeText={(theContent) => contentInputFunc(theContent)}
                                    multiline
                                />
                                <Text style={todoListModalStyle.requiredText}>*</Text>
                            </View>
                            {   
                                // show input error if 'contentError' state variable is set to 'true'
                                contentError &&
                                <Text style={todoListModalStyle.inputErrorText}>'Content' cannot be empty</Text>
                            }
                        </View>
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
