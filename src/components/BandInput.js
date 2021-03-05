// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const band = this.state
    this.props.dispatch({type: "ADD_BAND", band})
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band name:</label>
          <input type="text" value={this.state.name} onChange={e=>this.handleChange(e)}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: () => {
      dispatch(addBand())
    }
  }
}
export default connect(null, mapDispatchToProps)(BandInput)
