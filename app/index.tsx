import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import TodoList from "../components/TodoList";
import TodoModal, {Todo} from "../components/TodoModal";

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>();

    const handleAddPress = () => {
        setSelectedTodo(undefined);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedTodo(undefined);
    };

    return (
        <View style={styles.container}>
            <TodoList/>
            <Button title="Add Todo" onPress={handleAddPress}/>
            <TodoModal
                visible={modalVisible}
                onClose={handleCloseModal}
                todo={selectedTodo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
});

export default Home;
