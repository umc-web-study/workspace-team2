import React from 'react';
import Calendar from './Calendar';


import TodoTemplate from './TodoTemplate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import { TodoProvider } from '../TodoContext';




const style = {
    width: '1920px',
    height: '1080px',
    backgroundColor: 'black',
    overflow:'hidden',
};

const Back = () => {
    return(
        <body style ={style}>
            <Calendar></Calendar>
            <TodoProvider>
                <TodoTemplate>
                    <TodoHead />
                    <TodoList />
                    <TodoCreate />
                </TodoTemplate>
            </TodoProvider>
        </body>
    );
};

export default Back;