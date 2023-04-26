import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Kasper', 'Peter', 'Kevin']
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
    <Person key={person.id} person ={person}></Person>)
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
  return (
    <div>
        {
            personList
        }
        {
            nameList
        }
    </div>
  )
}

export default NameList
