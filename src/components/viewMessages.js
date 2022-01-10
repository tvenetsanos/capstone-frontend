import React, {Component, useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Redirect } from "react-router-dom";

const ViewMessages = (props) => {
  const [conversations, setConversations] = useState([])
  const [userTo, setUserTo] = useState(null)
  const [userFrom, setUserFrom] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    fetch("http://localhost:4000/conversations", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setConversations(data.conversations)
      })
  }
  
  const redirectToMessages = (userTo, userFrom) => {
    setUserTo(userTo)
    setUserFrom(userFrom)
    setRedirect(true)
  }

  const showMessages = () => {
    return conversations.map((conversation, index) => {
      let userTo = conversation.userTo.id
      let userFrom
      if (conversation.userTo.id === conversation.conversation.first_user_id) {
        userFrom = conversation.conversation.second_user_id
      }
      else {
        userFrom = conversation.conversation.first_user_id
      }
      const user = conversation.userTo.name
      let message = conversation.topMessage
      if (!message) {
        message = "You should start this conversation!"
      }
      else {
        message = message.message
      }
      return (
        <div>
          <ListItem onClick={() => redirectToMessages(userTo, userFrom)} button>
            <ListItemText primary={user} secondary={message} />
          </ListItem>
          <Divider />
        </div>
      )
    })
  }

  return (
    <div>
      <List component="nav" aria-label="mailbox folders">
        {showMessages()}
      </List>
      {redirect && <Redirect to={{pathname: "/message", state: {userTo: userTo, userFrom: userFrom}}} />}
    </div>
  )
}

export default ViewMessages;