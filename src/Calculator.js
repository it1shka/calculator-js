import React from 'react'
import Keyboard from './Keyboard'

function calc(expr) {
  try {
    const value = eval(expr.replace(/×/g, '*').replace(/÷/g, '/'))
    if(Number.isNaN(value)) return 0
    return value
  } catch {
    return 0
  }
}

export default class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      result: null
    }
    this.appendSymbol = this.appendSymbol.bind(this)
    this.removeSymbol = this.removeSymbol.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  appendSymbol(symbol) {
    this.setState(prev => ({
      input: prev.input + symbol,
      result: calc(prev.input + symbol)
    }))
  }

  removeSymbol() {
    this.setState(prev => ({
      input: prev.input.slice(0, -1),
      result: calc(prev.input.slice(0, -1))
    }))
  }

  clearInput() {
    this.setState({input: '', result: null})
  }

  calculate() {
    this.setState(prev => ({
      input: prev.result,
      result: prev.result 
    }))
  }

  render() {
    return (
      <div className='calculator-container'>
        <Keyboard 
          appendSymbol={this.appendSymbol}
          removeSymbol={this.removeSymbol}
          clearInput  ={ this.clearInput }
          calculate   ={ this.calculate  }/>

        <Display input={this.state.input} result={this.state.result} />
      </div>
    )
  }
}

function Display({input, result}) {
  return (
    <div className='display'>
      <h1>{input || '0'}</h1>
      <p>{result ?? 'None'}</p>
    </div>
  )
}