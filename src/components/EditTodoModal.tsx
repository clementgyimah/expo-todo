import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { EditTodoModalStyle } from '../assets/styles/styles';
import UUID from 'react-native-uuid';
import { editTodo } from '../functions/editTodo';
import { useDispatch } from 'react-redux';
import { editTodoReducer } from '../redux/features/todoFunc/todoSlice';

// modal component for showing 
export default function EditTodoModal({ ...props }) {
    const dispatch = useDispatch();
    const [IDValue, setIDValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);

    useEffect(() => {
        setIDValue(props.todoDetailObject.item.ID);
        setTitleValue(props.todoDetailObject.item.Title);
        setContentValue(props.todoDetailObject.item.Content);
    }, []);

    /**
     * function to close the modal
     */
    const closeDetailModal = () => {
        props.closeModal();
    }

    /**
     * function for handling changes in the title input value
     * @param currTitleValue current value of title from the title input
     */
    const handleTitleInput = (currTitleValue: string) => {
        setTitleValue(currTitleValue);
    }

    /**
     * function for handling changes in the content input value
     * @param currContentValue current value of content from the content input
     */
    const handleContentInput = (currContentValue: string) => {
        setContentValue(currContentValue);
    }

    /**
     * function for clearing/emptying all inputs
     * @returns emptying the content input
     */
    const clearInputs = () => {
        setTitleValue('');
        setIDValue('');
        return setContentValue('');
    }

    /**
     * function to save an edited modal into the database
     * @returns function to close the modal
     */
    const saveTodo = () => {
        if (titleValue.length <= 0) setTitleError(true);
        else if (contentValue.length <= 0) setContentError(true);
        else {
            editTodo({
                IDValue,
                titleValue,
                contentValue,
                editTodoDispatch: () =>
                    dispatch(editTodoReducer({
                        todoID: IDValue,
                        newTodoTitle: titleValue,
                        newTodoContent: contentValue
                    }))
            });
            clearInputs();
            return props.closeModal();
        }
    };

    // console.log(props.todoDetailObject.item)
    return (
        <TouchableOpacity
            style={props.showModal ? EditTodoModalStyle.container : EditTodoModalStyle.containerNull}
            activeOpacity={1}
            onPress={() => closeDetailModal()}>
            <TouchableOpacity
                style={EditTodoModalStyle.modalContainer}
                onPress={() => null}
                activeOpacity={1}>
                <View style={EditTodoModalStyle.titleView}>
                    <TextInput
                        style={EditTodoModalStyle.titleInput}
                        value={titleValue}
                        onChangeText={(tVal) => handleTitleInput(tVal)}
                        autoFocus={true}
                    />
                    {/*<Text style={EditTodoModalStyle.titleText}>{props.todoDetailObject.item.Title}</Text>*/}
                </View>
                <View style={EditTodoModalStyle.contentView}>
                    <ScrollView>
                        <TextInput
                            style={EditTodoModalStyle.contentInput}
                            value={contentValue}
                            multiline={true}
                            onChangeText={(cVal) => handleContentInput(cVal)}
                        />
                        {/*<Text style={EditTodoModalStyle.contentText}>{props.todoDetailObject.item.Content}</Text>*/}
                    </ScrollView>
                    <View style={EditTodoModalStyle.saveButtonView}>
                        <TouchableOpacity
                            style={EditTodoModalStyle.saveButton}
                            onPress={() => saveTodo()}>
                            <Text style={EditTodoModalStyle.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
