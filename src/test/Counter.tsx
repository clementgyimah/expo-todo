import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice';
import { addTodoReducer, removeTodoReducer } from '../redux/features/todoFunc/addTodo';

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const todoList = useSelector(state => state.todo.value);
    console.log(todoList);
    const dispatch = useDispatch();

    const addStoreTodo = () => {
        // addTodo({ title: 'Clement Test', content: 'What to do today' });
        dispatch(addTodoReducer({ title: 'Clement Test', content: 'What to do today' }));
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.incrementButtonView}>
                        <TouchableOpacity
                            onPress={() => dispatch(increment())}
                            style={{ ...styles.counterButton, backgroundColor: 'green' }}
                            activeOpacity={0.7}>
                            <Text style={styles.counterButtonText}>Increment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.counterTextView}>
                        <Text style={styles.counterText}>{count}</Text>
                    </View>
                    <View style={styles.decrementButtonView}>
                        <TouchableOpacity
                            onPress={() => dispatch(decrement())}
                            style={{ ...styles.counterButton, backgroundColor: 'red' }}
                            activeOpacity={0.7}>
                            <Text style={styles.counterButtonText}>Decrement</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.todoListView}>
                    <TouchableOpacity
                        onPress={() => addStoreTodo()}
                        style={{ ...styles.counterButton, backgroundColor: 'green' }}
                        activeOpacity={0.7}>
                        <Text style={styles.counterButtonText}>Save</Text>
                    </TouchableOpacity>
                    <Text style={styles.todoTitle}>{todoList[0].title}</Text>
                    <Text style={styles.todoContent}>{todoList[0].content}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
    },
    incrementButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    decrementButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    counterButton: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 10
    },
    counterButtonText: {
        color: 'white',
    },
    todoListView: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    todoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    todoContent: {
        fontSize: 15,
        marginTop: 15
    }
});
