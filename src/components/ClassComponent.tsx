import React, { Component } from 'react'

type MainProps = {
  caterogy:string
}
type MainState = {
  name:string
  email:string
}

export class User extends Component<MainProps,MainState> {
  constructor(props:MainProps) {
    super(props)
  
    this.state = {
       name:'Nidhi',
       email:'nidhi@gmail.com'
    }
  }
  changeEmail(emailID:string){
    this.setState({
      email:emailID
    })
  }
  render() {
    return (
      <div>
        Hi {this.state.name},{this.props.caterogy} ID : {this.state.email}
        <button onClick={()=>this.changeEmail('a@gmailcom')}>
          Change Email
        </button>
      </div>
    )
  }
}

export default User

