import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';
import TodoList from './components/TodoList';
import SignUp from './components/SignUp';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                title="Go to details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
function Tasks() {
    return (
        <div className="todo-app">
            <TodoList />
        </div>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View>
            <SignUp />
            <Button
                title="Go to Tasks"
                onPress={() => navigation.navigate('Tasks')}
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Tasks" component={Tasks} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
