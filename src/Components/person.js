import React from 'react'
import Name_list from './Name_list'

function person({person}) {
  return (
    <div>
      <h2>
          My name is {person.name} My id is {person.id} my section is {person.section}
    </h2>
    </div>
  )
}
export default  person
