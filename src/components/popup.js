import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

let Popup = ({winner, onButtonClick, text}) => (
  <Dialog
    open={!!text}
    title="The end.">
      <div className="text">{text}</div>
      <RaisedButton onClick={onButtonClick} label="Play Again" />
  </Dialog>
)

export default Popup
