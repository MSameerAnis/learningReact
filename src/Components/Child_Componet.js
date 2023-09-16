import React from 'react'

 function Child_Componet(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}
export default Child_Componet