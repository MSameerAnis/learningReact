import React from 'react'
import person from './person'

function Name_list() {

   

    const person = [
        {

            id: 72,
            name: 'Sameer',
            section: 'B',

        },
        {

            id: 76,
            name: 'Talha',
            section: 'B',

        },
        {

            id: 59,
            name: 'cake',       
            section: 'B',
     
        }
    ]



    const personList =person.map(person=>(<h2>
     my id is  {person.id} my name is {person.name} my section is {person.section}
    </h2>))
    return <div>
        {personList}
    </div>









}
export default Name_list