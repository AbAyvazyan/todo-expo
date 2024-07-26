import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem';
import useTodoStore from '../store/store';

const TodoList = () => {
    const todos = useTodoStore(state => state.todos);

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem todo={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default TodoList;
