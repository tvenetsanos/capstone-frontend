import React, { Component } from "react";
import { TextField, Button, FilledInput, InputLabel, InputAdornment, IconButton } from '@material-ui/core';

class MessageCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      newMessage: "",
      updateMessages: false
    }
  }

  componentDidUpdate() {
    if (this.state.updateMessages) {
      this.getMessages()
    }
  }

  componentDidMount() {
    this.getMessages()
  }

  getMessages = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include"
    };
    fetch(`http://localhost:4000/messages?dogTo=${this.props.location.state.dogTo}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.messages)
        this.setState({
          messages: data.messages,
          updateMessages: false
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
        console.log(data)
        this.setState({
          newMessage: "",
          updateMessages: true
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
        let color;
        let margin
        if (message.dog_to !== this.props.location.state.dogTo) {
          float = "left"
          color = "Grey"
          return (<p key={index} style={{backgroundColor: color,
                    padding:10,
                    borderRadius: 5, 
                    marginTop: 5,
                    marginRight: "25%",
                    maxWidth: '25%',
                    alignSelf: 'flex-start',
                    color: 'white',
                    borderRadius: 20,}}>{message.message}</p>)
        }
        else {
          float = "right"
          color = "#0078fe"
          return (<p key={index} style={{backgroundColor: color,
                    padding:10,
                    borderRadius: 5, 
                    marginTop: 5,
                    marginLeft: "25%",
                    maxWidth: '25%',
                    alignSelf: 'flex-start',
                    color: 'white',
                    borderRadius: 20,}}>{message.message}</p>)
        }
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
        <div style={{paddingLeft: "20rem", paddingRight: "20rem", paddingBottom: "5rem", paddingTop: "5rem", width: "100%"}}>
          {this.displayMessages()} 
          <FilledInput
            style={{}}
            value={this.state.newMessage}
            endAdornment={
              <InputAdornment position="end">
                <Button style={{marginLeft: "33rem"}} variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
              </InputAdornment>
            }
            onChange={this.handleNewMessageChange}
          /> 
        </div>
    );
  };
}
 
export default MessageCenter;