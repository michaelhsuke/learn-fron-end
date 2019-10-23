class CounterMounting extends React.Component {
  constructor() {
    console.log('--first stage start--')
    super()
    this.state = { count: 0 }
    console.log('1 --> constructor')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2 --> get derived state from props')
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  
  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log('3 --> render')
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    ) 
  }

  componentDidMount() {
    // this.setState({ count: this.state.count + 1 })
    console.log('Component Did Mount')
    console.log('--first stage end--')
  }
}