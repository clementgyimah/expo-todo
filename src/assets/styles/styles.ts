import {StyleSheet, Dimensions} from 'react-native';

// styles for entire app, created with stylesheet
export const todoListStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerRightView: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListStyle: {
        // width: '100%',
        paddingTop: 10,
    },
    eachRowMainView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eachRowView: {
        height: 50,
        width: 0.8 * Dimensions.get('window').width,
        backgroundColor: '#E2ECE9',
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    nameText: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'black',
    },
    ageText: {
        fontSize: 18,
        color: '#0800ffab'
    },
    textView: {
        flex: 8
    },
    deleteIconView: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    actionIcon: {
        marginHorizontal: 3
    }
  });

export const appStyle = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#277DA1'
    }
});

export const todoListModalStyle = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disableModal: {
        display: 'none',
    },
    addTodoContainer: {
        height: '70%',
        width: '70%',
        backgroundColor: 'white'
    },
    titleView: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        marginHorizontal: 15
    },
    contentView: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#277DA1'
    },
    titleInput: {
        width: '80%',
        height: 40,
        backgroundColor: 'rgba(255, 210, 217, 0.8)',
        fontSize: 15,
        borderRadius: 200,
        paddingHorizontal: 15,
    },
    /*
    nameInputError: {
        width: '80%',
        height: 40,
        backgroundColor: 'rgba(255, 210, 217, 0.8)',
        fontSize: 15,
        borderRadius: 200,
        paddingHorizontal: 15,
    },
    */
    inputView: {
        // flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    inputViewError: {
        marginTop: 10,
        alignItems: 'center'
    },
    inputRow: {
        flexDirection: 'row',
    },
    contentInput: {
        width: '80%',
        height: 100,
        backgroundColor: 'rgba(255, 210, 217, 0.8)',
        fontSize: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    /*
    contentInputError: {
        width: '80%',
        height: 100,
        backgroundColor: 'rgba(255, 210, 217, 0.8)',
        fontSize: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    */
    requiredText: {
        marginLeft: 5,
        color: 'red',
        fontSize: 20
    },
    saveButtonView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    saveButton: {
        backgroundColor: '#277DA1',
        width: 100,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveButtonText: {
        color: 'white',
        fontSize: 15
    },
    inputErrorText: {
        fontSize: 13,
        color: 'red',
        marginBottom: 10,
        marginHorizontal: 5

    }
});

export const TodoDetailModalStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    containerNull: {
        display: 'none'
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '70%',
        height: '70%'
    },
    titleView: {
        width: '100%',
        // backgroundColor: '#CDDAFD',
        borderBottomWidth: 1,
        borderBottomColor: '#4d4747',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F94144'
    },
    contentView: {
        flex: 1,
        padding: 10
    },
    contentText: {
        fontSize: 15,
        color: '#277DA1'
    }
});

export const EditTodoModalStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    containerNull: {
        display: 'none'
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '70%',
        height: '70%'
    },
    titleView: {
        width: '100%',
        // backgroundColor: '#CDDAFD',
        borderBottomWidth: 1,
        borderBottomColor: '#4d4747',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F94144',
        width: 200,
        height: 30,
        // borderBottomWidth: 1,
        // borderBottomColor: '#277DA1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentView: {
        flex: 1,
        padding: 10
    },
    contentInput: {
        fontSize: 15,
        color: '#277DA1'
    },
    saveButtonView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3
    },
    saveButton: {
        backgroundColor: '#277DA1',
        width: 100,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveButtonText: {
        color: 'white',
        fontSize: 15
    },
});
