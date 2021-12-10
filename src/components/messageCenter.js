import React, { Component } from "react";
import { TextField, Button, Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';

class MessageCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      newMessage: ""
    }
    this.getMessages()
  }

  getMessages = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include"
    };
    fetch("http://localhost:4000/messages?dogTo=2", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          messages: data.messages
        })
      })
  }

  sendMessage = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({ 
        dog_to: this.props.location.state.dogTo,
        message: this.state.newMessage
      })
    };
    fetch("http://localhost:4000/messages", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          newMessage: "" 
        })
      })
  }

  handleNewMessageChange = (event) => {
    this.setState({
      newMessage: event.target.value
    })
  }

  displayMessages = () => {
    if (this.state.messages) {
      return this.state.messages.map((message, index) => {
        let float;
        if (message.dog_to === this.props.location.state.dogTo) {
          float = "left"
        }
        else {
          float = "right"
        }
        return (
          <p key={index} style={{textAlign: float, backgroundColor: "#dedede",
                    padding:10,
                    borderRadius: 5}}>{message.message}</p>
        )
      })
    }
    else {
      return (
        <p>Start a conversation now!</p>
      )
    }
  }

  render() {
    return (
        <div>
          {this.displayMessages()} 
          <Input
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
              </InputAdornment>
            }
            onChange={this.handleNewMessageChange}
          /> 
        </div>
    );
  };
}
 
export default MessageCenter;