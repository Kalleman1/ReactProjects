import React from 'react'

const greet = props => {
    const {name, heroName} = props
  return (
    <div>
      Hello {name} a.k.a {heroName}
    </div>
  )
}

export default greet