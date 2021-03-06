import React from 'react'

export default class Controls extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='ctbar'>
        <button onClick={this.props.generateRandomBoard} >Random</button>
        <button onClick={this.props.clearBoard} >Clear</button>
        <button onClick={this.props.generateGGG} >GGG</button>
        <button onClick={this.props.generateAcorn} >Acorn</button>
        <button onClick={this.props.stepForward} >Step</button>
        <button onClick={this.props.startGens} >Start</button>
        <button onClick={this.props.pauseGens} >Pause</button>
        <span id='generations'>
          Gen: {this.props.generation}
        </span>
      </div>
    )
  }
}

Controls.propTypes = {
  generateRandomBoard: React.PropTypes.func.isRequired,
  clearBoard: React.PropTypes.func.isRequired,
  stepForward: React.PropTypes.func.isRequired,
  startGens: React.PropTypes.func.isRequired,
  pauseGens: React.PropTypes.func.isRequired,
  generateAcorn: React.PropTypes.func.isRequired,
  generateGGG: React.PropTypes.func.isRequired,
  generation: React.PropTypes.number.isRequired
}
