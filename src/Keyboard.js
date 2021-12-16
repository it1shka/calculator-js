import React from 'react'

export default class Keyboard extends React.Component {
  
  render() {

    const makeFn = (symbol) => {
      return () => { 
        return this.props.appendSymbol(symbol) 
      }
    }

    function makeBtn(symbol) {
      return <button onClick={makeFn(symbol)}>{symbol}</button>
    }

    function createTriplet(from) {
      return Array.from(Array(3), (_, idx) => {
        const sym = String(from + idx)
        return makeBtn(sym)
      })
    }

    return (
      <div className='keyboard'>

        <button 
          style={{gridColumn: '1 / 3'}}
          onClick={this.props.clearInput}
          >Clear</button>
        <button onClick={this.props.removeSymbol}>Del</button>
        {makeBtn('÷')}

        {createTriplet(7)}
        {makeBtn('×')}

        {createTriplet(4)}
        {makeBtn('-')}

        {createTriplet(1)}
        {makeBtn('+')}

        {makeBtn('0')}
        {makeBtn('.')}
        <button 
          style={{gridColumn: '3 / 5'}}
          onClick={this.props.calculate}
          >=</button>

        
      </div>
    )
  }
}