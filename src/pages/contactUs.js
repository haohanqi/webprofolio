import React, { Component } from 'react';
import axios from 'axios';


class contactUs extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    handleSubmit(e){
      e.preventDefault();
      const name =  document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      // console.log(name);
      // console.log(email);
      // console.log(message);
      axios({
       method: "POST", 
       url:"http://localhost:3002/send", 
       data: {name: name, email: email, message: message}
       
      }).then((response)=>{
        // console.log(response.data.status);
        // console.log(response.data.name);
        // console.log(response.data.message);
        
        if (response.data.msg === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
  
    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }
    
    render() {
      return(
        <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  }
  


export default contactUs;

