import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
    super(props)

    this.state = {
        isLoggedIn: false
    }

    this.loginHandler = this.loginHandler.bind(this)
 }

 loginHandler(){
    this.setState({
        isLoggedIn: true
    })
 }

  render() {

    let message
    if (this.state.isLoggedIn){
        message = <div>Welcome Kasper</div>
    }
    else{
        message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>

    // if (this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Kasper</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //         <div>Welcome Guest</div>
    //         <button onClick={this.loginHandler}>Login</button>
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Kasper</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
