import React, { Component } from 'react'
import Pure from './Pure'
import Reg from './Reg'

 class Baap extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sameer'
      }
    }

    componentDidMount(){
        setInterval(()=>{

            this.setState({
              name:'Sameer' 
            })



        },2000)
    }
    
  render() {
    return (
      <div>
        Baap Component 

        <Pure  name={this.state.name}/>
        <Reg  name={this.state.name} />
      </div>
    )
  }
}

export default Baap
