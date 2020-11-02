import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number,
    title: string,
    completed: boolean
}

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`Id : ${id}, Title: ${title}, Completed: ${completed}`);
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    logTodo(todo.id, todo.title, todo.completed);
});