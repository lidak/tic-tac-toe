import React, { Component } from 'react'
import { connect } from 'react-redux'

class SomeList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFetching: true
    }
  }

  render () {
    return (
      <div className="list-container">
        {
          this.state.isFetching && <div className="spinner" />
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SomeList)
