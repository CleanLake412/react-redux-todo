// *** todosの初期状態は、state = []
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': // *** todoを追加
            return [
                ...state,    // *** 分割代入、stateに追加
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':  // *** todo.completedをトグル
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed} // *** 分割代入、todoのcompletedを変更
                    : todo
            )
        default:
            return state
    }
}


export default todos