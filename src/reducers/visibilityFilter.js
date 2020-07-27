import { VisibilityFilters } from '../actions'

// *** visibilityFilterの初期状態は、state = VisibilityFilters.SHOW_ALL
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter