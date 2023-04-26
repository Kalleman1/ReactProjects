import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>My name is {person.name}, I am {person.age} years old, and i am skilled in {person.skill}</h2>
    </div>
  )
}

export default Person
