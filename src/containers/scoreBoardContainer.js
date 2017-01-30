import React from 'react'
import { connect } from 'react-redux'

import scoreBoard from '../components/scoreBoard'

const mapStateToProps = (state) => (
  {
    score: state.game.score
  }
)

export default connect(mapStateToProps)(scoreBoard)
