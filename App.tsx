import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoList } from './src/screens/TodoList';
import { appStyle } from './src/assets/styles/styles';
import reduxStore from './src/redux/app/store';
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{
              title: 'Todo List',
              headerTitleStyle: appStyle.headerTitleStyle,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}