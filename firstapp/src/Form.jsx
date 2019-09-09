import React from "react"

class Form extends React.Component {
    
    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="title" />
                <input type="text" name="desc" />
                <button type="submit">追加</button>
            </form>

            // formがsubmitされたらAppのstateを書き換えたい！
            // しかし、formコンポーネント内では、Appのstateは参照できない・・・
        )
    }
}

export default Form


// onSubmit='this.props.hundleSubmit()この処理をAppでやる