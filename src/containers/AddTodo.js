import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// *** functional componentsは引数でpropsを受け取る
// *** connected component( = AddTodo )にはprops.dispatchが渡される
// *** 分割代入でdispatchを取り出す
const AddTodo = ({ dispatch }) => {
    let input  // *** input変数

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {  // *** input DOM要素のvalueにアクセス
                    return
                }
                dispatch(addTodo(input.value))   // *** (1) ADD_TODO action
                input.value = ''
            }}>
                <input ref={node => input = node} />   // *** input変数にDOM要素を代入
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)