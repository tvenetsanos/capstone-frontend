import React, { useEffect, useState } from "react";
import { TextField, Button, FilledInput, InputLabel, InputAdornment, IconButton } from '@material-ui/core';

const MessageCenter = (props) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [updateMessages, setUpdateMessages] = useState(false)
  const [conversation, setConversation] = useState(null)

  useEffect(() => {
    getConversation()
  }, [updateMessages])

  useEffect(() => {
    getConversation()
  }, [])

  const getConversation = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({ 
        first_user_id: props.location.state.userTo,
        second_user_id: props.location.state.userFrom
      })
    };
    fetch(`http://localhost:4000/conversation`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setConversation(data.conversation)
        getMessages(data.conversation.id)
      })
    }

  const getMessages = (conversation_id) => {
    console.log(conversation_id)
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include"
    };
    fetch(`http://localhost:4000/conversation/${conversation_id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages)
        setUpdateMessages(false)
      })
  }

  const sendMessage = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify({ 
        user_id: props.location.state.userFrom,
        conversation_id: conversation.id,
        message: newMessage
      })
    };
    fetch("http://localhost:4000/message", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setNewMessage("")
        setUpdateMessages(true)
      })
  }

  const displayMessages = () => {
    if (messages) {
      return messages.map((message, index) => {
        let float;
        let color;
        if ("" + message.user_id !== "" + props.location.state.userFrom) {
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

  return (
        <div style={{paddingLeft: "20rem", paddingRight: "20rem", paddingBottom: "5rem", paddingTop: "5rem", width: "100%"}}>
          {displayMessages()} 
          <FilledInput
            value={newMessage}
            endAdornment={
              <InputAdornment position="end">
                <Button style={{marginLeft: "33rem"}} variant="contained" color="primary" onClick={sendMessage}>Send</Button>
              </InputAdornment>
            }
            onChange={(event) => setNewMessage(event.target.value)}
          /> 
        </div>
    );
}
 
export default MessageCenter;