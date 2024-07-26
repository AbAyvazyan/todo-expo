import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTodoStore from '../store/store';

interface TodoItemProps {
    todo: {
        id: string;
        title: string;
        description: string;
        completed: boolean;
    };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const toggleTodo = useTodoStore(state => state.toggleTodo);
    const deleteTodo = useTodoStore(state => state.deleteTodo);

    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
                <Text style={[styles.title, todo.completed && styles.completed]}>
                    {todo.title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    delete: {
        color: 'red',
    },
});

export default TodoItem;
