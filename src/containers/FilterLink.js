import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// *** 表示するボタンが現在表示中のものならば、active=trueにする。
// *** 現在のstate.visibilityFilterと、親において指定されたownProps.filterを比較する
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)) // *** (3) SET_VISIBILITY_FILTER action
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)