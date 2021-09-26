import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { todoListStyle } from '../assets/styles/styles';
import todoList from '../database/todoList.json';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import FeatherIcon from '@expo/vector-icons/Feather';
import { verifyDb } from '../functions/verifyDb';
import { addTodo } from '../functions/addTodo';
import TodoListModal from '../components/TodoListModal';

export const TodoList = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [theDataArray, setTheDataArray] = useState([]);
    const [showModal, setShowModal] = useState(false);

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
    }, []);

    const getTodoList = () => {
        let dataArray = [] as any;
        // for(const i in todoList) dataArray.push({name: i, age: todoList[i]});
        for (const i in todoList) dataArray.push({ name: i, age: todoList[i] });
        // console.log(dataArray);
        setTheDataArray(dataArray);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const addTodoFunc = () => {
        setShowModal(true);
    }

    return (
        <View style={todoListStyle.container}>
            <FlatList data={theDataArray} renderItem={eachObject => (
                <View style={todoListStyle.eachRowView}>
                    <View style={todoListStyle.textView}><Text style={todoListStyle.nameText}>{eachObject.item.name}: <Text style={todoListStyle.ageText}>{eachObject.item.age}</Text></Text></View>
                    <View style={todoListStyle.deleteIconView}><Icon name='delete' size={25} color='red' /></View>
                </View>
            )}
                keyExtractor={item => item.name}
            />
            { showModal &&
                <TodoListModal showModal={showModal} closeModal={() => closeModal()} />
            }
        </View>
    )
}
