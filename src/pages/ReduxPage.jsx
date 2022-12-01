import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {
  componentDidMount(){
    store.subscribe(() => {this.forceUpdate()})
  }

  asyncAdd(){
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({type: 'add'})
      }, 1000)
    })
  }

  render() {
    return (
      <>
        <h1>Redux Source Code</h1>
        <div>counter： {store.getState()}</div>
        <button onClick={() => {store.dispatch({type: 'add'})}}>Add</button>
        <button onClick={() => {store.dispatch({type: 'delete'})}}>Delete</button>
        <button onClick={this.asyncAdd}>Async Add</button>
      </>
    )
  }
}

