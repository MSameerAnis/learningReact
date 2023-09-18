import React, { PureComponent } from 'react'

 class Pure extends PureComponent {
  render() {
    return (
      <div>
        pure component {this.props.name}
      </div>
    )
  }
}

export default Pure
