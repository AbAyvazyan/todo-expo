import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import useTodoStore from '../store/store';

export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoModalProps {
    visible: boolean;
    onClose: () => void;
    todo?: Todo;
}

const TodoModal: React.FC<TodoModalProps> = ({ visible, onClose, todo }) => {
    const [title, setTitle] = useState(todo ? todo.title : '');
    const [description, setDescription] = useState(todo ? todo.description : '');
    const addTodo = useTodoStore(state => state.addTodo);
    const updateTodo = useTodoStore(state => state.updateTodo);

    const handleSubmit = () => {
        if (todo) {
            updateTodo({ ...todo, title, description });
        } else {
            addTodo({
                id: Date.now().toString(),
                title,
                description,
                completed: false,
            });
        }
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />
                <Button title="Save" onPress={handleSubmit} />
                <Button title="Cancel" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default TodoModal;
