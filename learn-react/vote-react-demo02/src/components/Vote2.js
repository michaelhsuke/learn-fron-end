import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default class Vote extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      m: 0,
      n: 0
    }
  }

  // componentWillMount(...args) { 
  //   console.log('componentWillMount')
  //   // console.log(args, this)
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props)
    return {
      foo: 'bar'
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate, prevState=', prevState, this.state)
    return { hello: 'world' }
  }

  componentDidMount() {
    console.log('componentDidMount', this.state)
  }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate, nextState = ', nextState)
    return true
  }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  componentDidUpdate(prevProps, prevState, snap) {
    console.log('componentDidUpdate, preveState=', prevState, this.state, snap)
  }

  support = () => {
    const { m } = this.state
    this.setState({
      m: m + 1
    })
  }

  unsupport = () => {
    const { n } = this.state
    this.setState({
      n: n + 1
    })
  }

  render() {
    console.log('render')
    const { m, n } = this.state
    const total = m + n
    return (
      <section>
        <div className="panel panel-default" style={{ margin: "20px auto"}}>
          <div className="panel-heading">{ this.props.title }</div>
          <div className="panel-body">
            <div className="panel__line">支持：{ m }</div>
            <div className="panel__line">反对：{ n }</div>
            <div className="panel__line">支持率：{ total === 0 ? '0%': (m / total * 100).toFixed(2) + '%' }</div>
          </div>
          <div className="panel-footer">
            <button className="btn btn-success" style={{ marginRight: '10px'}} onClick={ this.support }>支持</button>
            <button className="btn btn-danger" onClick={ this.unsupport }>反对</button>
          </div>
        </div>
      </section>
    )
  }
}