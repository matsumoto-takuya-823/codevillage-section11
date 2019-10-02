import React from "react"
import styled from "styled-components"

const ItemStyle = styled.div`
list-style: none;
border: 1px solid;
border-radius: 20px;
margin-bottom: 10px;
padding: 20px;
background-color: rgba(0, 0, 0, 0.5);
color: #fff;
li {
    display: flex;
    position: relative;
    p {
        span {
            font-size: 25px;
            font-weight: bold;
            text-shadow: 2px 2px 0 black,
               -2px 2px 0 black,
               2px -2px 0 black,
               -2px -2px 0 black;
        }
    }
    p:first-child {
        margin-right: 15%;
    }
    button {
        background-color: black;
        height: 30px;
        border-radius: 20px;
        color: #fff;
        box-shadow: 2px 2px rgba(0, 0, 0, 0.6);
        margin-left: 20px;
    }
    .complete {
        position: absolute;
        bottom: 10px;
        right: 80px;
    }
    .delete {
        position: absolute;
        bottom: 10px;
        right: 20px;
    }
}

`

export default class TodoItem extends React.Component {
    render(){
        const buttonText = this.props.isDone?"戻す":"完了"
        return (
            <ItemStyle>
                <li>
                    <p><span>TITLE</span><br></br>{this.props.title}</p>
                    <p><span>CONTENT</span><br></br>{this.props.desc}</p>
                    <button className="complete" onClick={(e)=>{this.props.handleClick(this.props.id)}}>{buttonText}</button>
                    <button className="delete" onClick={(e)=>{this.props.handleDelete(this.props.id)}}>削除</button>
                </li>
            </ItemStyle>
        )
    }
}