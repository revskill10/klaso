import { Component } from 'react'

// const config = {
//   state: {},
//   methods: ctx => ({}),
//   staticMethods: {},
// }

/**
 * klaso
 * @param {{ state?: any, methods: Function, staticMethods?: Object }} config
 */
const klaso = config => render =>
  class Klaso extends Component {
    state = config.state || {}

    static displayName = render.name

    static getDerivedStateFromProps(state, props) {
      return config.staticMethods ? config.staticMethods.getDerivedStateFromProps(state, props) : null
    }

    constructor(props) {
      super(props)

      Object.assign(this, config.methods(this), {
        render: () => render({ ...this.props, ...this.state, ...config.methods(this) }),
      })
    }
  }

export default klaso
