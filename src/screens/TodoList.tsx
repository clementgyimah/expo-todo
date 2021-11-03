import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { todoListStyle } from '../assets/styles/styles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import FeatherIcon from '@expo/vector-icons/Feather';
import { verifyDb } from '../functions/verifyDb';
import { getAllTodos } from '../functions/getTodo';
import TodoListModal from '../components/TodoListModal';
import TodoDetailModal from '../components/TodoDetailModal';
import { flatListItems } from '../types/TsTypes';
import { removeTodo } from '../functions/removeTodo';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodoReducer, initializeTodo } from '../redux/features/todoFunc/addTodo';

export const TodoList = ({ navigation }: any) => {
    const todoListStore = useSelector(state => state.todo.value);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showTodoDetailModal, setShowTodoDetailModal] = useState(false);
    const [todoDetailObject, setTodoDetailObject] = useState({});

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <View style={todoListStyle.headerRightView}>
                <FeatherIcon
                    name='plus-circle'
                    size={25}
                    color='#277DA1'
                    onPress={() => addTodoFunc()} />
            </View>
        })
        verifyDb();
        getTodoList();
    }, []);

    const getTodoList = () => {
        getAllTodos({ setTheDataArray: (theArray: Array<Object>) => dispatch(initializeTodo({ theArray })) });
        // console.log('The data array: ', todoListStore);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const closeTodoDetailModal = () => {
        setShowTodoDetailModal(false);
    }

    const addTodoFunc = () => {
        setShowModal(true);
    }

    const showTodoModal = (todoDetail: ListRenderItemInfo<flatListItems>) => {
        setShowTodoDetailModal(true);
        setTodoDetailObject(todoDetail);
    }

    const removeTodoFunc = (todoID: string) => {
        // console.log('See id: ', todoID);
        removeTodo({
            todoID,
            removeTodoDispatch: () => dispatch(removeTodoReducer({ todoID }))
        });
    }

    return (
        <View style={todoListStyle.container}>
            <FlatList style={todoListStyle.flatListStyle} data={todoListStore} renderItem={(eachObject) => (
                <View style={todoListStyle.eachRowMainView}>
                    <TouchableOpacity
                        style={todoListStyle.eachRowView}
                        activeOpacity={0.6}
                        onPress={() => showTodoModal(eachObject)}>
                        <View style={todoListStyle.textView}>
                            <Text style={todoListStyle.nameText}>
                                {eachObject.item.Title}
                            </Text>
                        </View>
                        <View style={todoListStyle.deleteIconView}>
                            <Icon
                                name='delete'
                                size={25}
                                color='#F94144'
                                onPress={() => removeTodoFunc(eachObject.item.ID)}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            )}
                keyExtractor={(item: flatListItems) => item.ID}
            />
            {showModal &&
                <TodoListModal
                    showModal={showModal}
                    closeModal={() => closeModal()} />
            }
            {showTodoDetailModal &&
                <TodoDetailModal
                    showModal={showTodoDetailModal}
                    closeModal={() => closeTodoDetailModal()}
                    todoDetailObject={todoDetailObject}
                />
            }
        </View>
    )
}
