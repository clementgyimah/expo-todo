import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { todoListStyle } from '../assets/styles/styles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import FeatherIcon from '@expo/vector-icons/Feather';
import { verifyDb } from '../functions/verifyDb';
import { getAllTodos } from '../functions/getTodo';
import TodoListModal from '../components/TodoListModal';
import { flatListItems } from '../types/TsTypes';

export const TodoList = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [theDataArray, setTheDataArray] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [reloadToggler, setReloadToggler] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <View style={todoListStyle.headerRightView}>
                <FeatherIcon
                    name='plus-circle'
                    size={25} color='#0800ffab'
                    onPress={() => addTodoFunc()} />
            </View>
        })
        getTodoList();
        verifyDb();
    }, [reloadToggler]);

    const getTodoList = () => {
        getAllTodos({ setTheDataArray: (theArray: never[]) => setTheDataArray(theArray) });
        /*
        let dataArray = [] as any;
        // for(const i in todoList) dataArray.push({name: i, age: todoList[i]});
        for (const i in todoList) dataArray.push({ name: i, age: todoList[i] });
        // console.log(dataArray);
        setTheDataArray(dataArray);
        */
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const addTodoFunc = () => {
        setShowModal(true);
    }

    return (
        <View style={todoListStyle.container}>
            <FlatList data={theDataArray} renderItem={(eachObject) => (
                <TouchableOpacity style={todoListStyle.eachRowView}>
                    <View style={todoListStyle.textView}>
                        <Text style={todoListStyle.nameText}>
                            {eachObject.item.Title}
                        </Text>
                    </View>
                    <View style={todoListStyle.deleteIconView}>
                        <Icon name='delete' size={25} color='red' />
                    </View>
                </TouchableOpacity>
            )}
                keyExtractor={(item: flatListItems) => item.UUID}
            />
            {showModal &&
                <TodoListModal showModal={showModal} closeModal={() => closeModal()} reloadList={() => setReloadToggler(!reloadToggler)} />
            }
        </View>
    )
}
