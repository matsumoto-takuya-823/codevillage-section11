import React from "react"
import Form from "./Form"
import TodoList from "./TodoList"

class App extends React.Component {
    constructor() {
        super() //親のコンポーネントを使用する時に書く

        this.state = {
            todos: [
                {
                    title: "課題をやる！",
                    desc: "test",
                    isDone: false
                },
                {
                    title: "課題をやる！",
                    desc: "testetstsetstsrtsr",
                    isDone: false
                }
            ]
        }
    }
    handleSubmit(e){
        e.preventDefault()

        //まず、フォームに入力されたデータを取得する

        // const title = this.title.value
        //(注意:this.ではイベントの発生源を参照できない！)
        const title = e.target.title.value  //e.targetでイベント(submitイベント)の発生源を示す
        const desc = e.target.desc.value

        //直接書き換えられない！
        // this.state.todos.push({
        //     id: 3,
        //     title: title,
        //     desc: desc,
        //     isDone: false
        // })

        //todosをコピーする
        // thisは実行元を参照する
        const newTodos = this.state.todos.slice() //()内は何も書かないと全部指定したことになる
        newTodos.push({
            title: title,
            desc: desc,
            isDone: false
        })

        //再レンダリングを行うために、必ずsetStateを使用する。
        this.setState({
            //新しいstateの変更の内容を記述
            todos: newTodos
        })

        //stateのtodosに、入力されたデータを追加する
    }

    handleClick(e){
        e.preventDefault()

        console.log('click')
    }



    render() {
        return ( 
            // <React.Fragment> divの代わりになる
            /* thisは実行元を参照するのでその前の段階のthisを参照するようにbindする */
            <React.Fragment> 
                <Form handleSubmit={this.handleSubmit.bind(this)}></Form>
                <TodoList todos={this.state.todos}></TodoList>
            </React.Fragment>
        )
    }
}

export default App

// dom.addEventListenter('click',function(e) {

// })


//<form>
    //<input name='sample'>
//</form>

//form.sample これで取得可能



// thisの仕組み
// function hello() {
//     return this.name
// }

// window.hello()

// const Beppu = {
//     name: 'べっぷ',
//     hello: hello
// }

// Beppu.hello()

// const Tanoue = {
//     name: 'たのうえ',
// }
// Beppu.hello.call(Tanoue) //callを使うと()内のオブジェクトを実行する。では、applyは？
// // =>'たのうえ'
// Beppu.hello.bind(this) //bindは、関数を返す  ここのthisはundefind
// // => function hello() {
// //         return Tanoue.name
// // }