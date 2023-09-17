import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
        username:'',
        area:''
      }
    }
    changeHandle=(event)=>{
    this.setState({
        username: event.target.value 
    })

    }

    areaHandle=(event)=>{


        this.setState({

            area : event.target.value
        })
    }
    
  render() {
    return (
      <form action="
      
      ">

        <label htmlFor="">Name</label>
        <input type="text"
        value={this.state.username} 
        onChange={this.changeHandle} />

        <div>
            <label htmlFor="">Add text</label>
            <textarea name="" id="" cols="30" rows="10"  value={this.state.area}  onChange={this.sadareaHandle}></textarea>
        </div>


        <div>



            <label htmlFor="">
                topic
            </label>


            <select name="
            " id
            ="">


                <option value="react">React</option>
                <option value="
                angualr">Angular</option>

                <option value="
                "></option>









            </select>
        </div>







      </form>
    )
  }
}

export default Form
