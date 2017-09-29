import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './comp/TodoList.jsx';


var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            todos: [
                {
                    id: 1,
                    text: 'Practise React'
                }, {
                    id: 2,
                    text: 'Get some rest'
                }, {
                    id: 3,
                    text: 'Eat Good Food'
                }, {
                    id: 4,
                    text: 'Play Games'
                }
            ]
        }
    },
    render(){
        var{todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});
  
module.exports = TodoApp;