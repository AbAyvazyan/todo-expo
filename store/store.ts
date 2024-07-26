import {create} from 'zustand';

interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (updatedTodo: Todo) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

const useTodoStore = create<TodoStore>(set => ({
    todos: [],
    addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
    updateTodo: (updatedTodo) => set(state => ({
        todos: state.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo,
        ),
    })),
    deleteTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    toggleTodo: (id) => set(state => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
    })),
}));

export default useTodoStore;
