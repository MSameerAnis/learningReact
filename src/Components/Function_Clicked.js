import React from 'react'

function Function_Clicked() {

    function clickHandler(){
        console.log("clicked")

    }


   
  return (
   
    <div>
      <button onClick={clickHandler} >Click</button>
    </div>
  )
}

export default Function_Clicked
