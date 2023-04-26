import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Kasper',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Peter',
            age: 30,
            skill: 'Dart'
        },
        {
            id: 3,
            name: 'Kevin',
            age: 30,
            skill: 'Dart'
        }
    ]
    const personList = persons.map(person => 
    <Person person ={person}></Person>)
  return (
    <div>
        {
            personList
        }
    </div>
  )
}

export default NameList
