import React from "react"
import TodoItem from "./TodoItem"
import styled from "styled-components"

const TodoListStyle = styled.div`
width: 80%;
`

export default class TodoList extends React.Component{
    render(){
        const todos = this.props.todos.map((todo,i)=>{
            //一意なキーを用意する
            return (
                
                <TodoItem
                    key={i}
                    id={i}
                    title={todo.title}
                    desc={todo.desc}
                    isDone={todo.isDone}
                    handleClick={this.props.handleClick}
                    handleDelete={this.props.handleDelete}
                />
                
            )
        })
        return(
            <TodoListStyle>
            <ul>
                {todos}
            </ul>
            </TodoListStyle>
        )
    }
}

//mapの仕様
// const arr = [1,2,3,4]
// const newarr =arr.map(function(num){  //mapは関数をとる //元の配列をいじる訳ではない、sliceの感覚
//     return num*num
// })
// [1,4,9,16]
