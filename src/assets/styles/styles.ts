import {StyleSheet} from 'react-native';

export const todoListStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerRightView: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    eachRowView: {
        height: 50,
        width: 300,
        backgroundColor: '#00ffff96',
        marginTop: 10,
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
        flex: 2,
        alignItems: 'center',
    }
  });

export const appStyle = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3d38b7ed'
    }
})

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
        paddingHorizontal: 15
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    nameInput: {
        width: '80%',
        height: 40,
        backgroundColor: 'rgba(255, 210, 217, 0.8)',
        fontSize: 15,
        borderRadius: 200,
        paddingHorizontal: 15,
        marginVertical: 10
    },
    textInput: {
        width: '80%',
        height: 100,
        backgroundColor: 'rgba(255, 210, 217, 0.8)',
        fontSize: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 10,
    }
})
