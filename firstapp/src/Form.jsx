import React from "react"
import styled from 'styled-components'

const FormStyle = styled.div`
position: fixed;
right: 15%;
top: 10%;
border: 1px solid #fff;
border-radius: 20px;
padding: 10px;
background-color: rgba(0, 0, 0, 0.5);
input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    height: 20px;
}

button {
    width: 50px;
    height: 50px;
    font-size: 25px;
    background-color: black;
    border-radius: 50%;
    color: #fff;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.6);
    margin-left: 100px;
}
`
// export const TitleForm = AddBtn.extend`
//   background-color: green;
// `
// export const Desc = AddBtn.extend`
//   background-color: red;
// `


class Form extends React.Component {
    
    render () {
        return (
            <FormStyle>
                <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="title" placeholder="TITLE"/>
                <input type="text" name="desc" placeholder="CONTENT"/>
                <button type="submit">+</button>
                </form>
            </FormStyle>

            // formがsubmitされたらAppのstateを書き換えたい！
            // しかし、formコンポーネント内では、Appのstateは参照できない・・・
        )
    }
}

export default Form


// onSubmit='this.props.hundleSubmit()この処理をAppでやる