import React from "react"

export default class TodoItem extends React.Component {
    render(){
        const buttonText = this.props.isDone?"戻す":"完了"
        return (
            <li>
                <p>タイトル: {this.props.title}</p>
                <p>詳細: {this.props.desc}</p>
                <button onClick={(e)=>{this.props.handleClick(this.props.id)}}>{buttonText}</button>
            </li>
        )
    }
}