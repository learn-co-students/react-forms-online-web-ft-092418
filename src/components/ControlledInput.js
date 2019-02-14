import React, { Component } from 'react'

export default class ControlledInput extends React.Component {
    
    constructor () {
        super()
        this.state = { 
            firstName: '',
            lastName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleFirstNameChange = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleLastNameChange = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    //controlled:
    render () {
        return (
            <div>
                <input type="text" id="firstName" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
                <input type="text" id="lastName" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
            </div>
        )
    }
}








// UNCONTROLLED

// import React, { Component } from 'react'

// export default class ControlledInput extends React.Component {
    
//     constructor () {
//         super()
//         this.state = { 
//             value: ''
//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         // this.sendFormDataSomewhere(this.state)
//         // Note: Most often, submitting a form would involve sending a request to a server somewhere online. We won't get into async React just yet.
//     }


//     uncontrolled:
//     render () {
//         return (
//             <form onSubmit={event => this.handleSubmit(event)}>
//                 <input 
//                     type="text"
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                 />
//             </form>
//         )
//     }

// }