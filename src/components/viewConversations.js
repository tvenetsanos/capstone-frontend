import React, {Component, useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Redirect } from "react-router-dom";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const ViewMessages = () => {
  const [conversations, setConversations] = useState([])
  const [userTo, setUserTo] = useState(null)
  const [userFrom, setUserFrom] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [conversationId, setConversationId] = useState(0)

  useEffect(() => {
    getConversations()
  }, [])

  const getConversations = () => {
    console.log("hey")
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
  
  const redirectToMessages = (userTo, userFrom, conversationId) => {
    setUserTo(userTo)
    setUserFrom(userFrom)
    setConversationId(conversationId)
    setRedirect(true)
  }

  const deleteConversation = async (conversation_id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
    };
    await fetch(`http://localhost:4000/conversations/${conversation_id}`, requestOptions)
    getConversations()
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
        <div key={index}>
          <ListItem onClick={() => redirectToMessages(userTo, userFrom, conversation.conversation.id)} button>
            <ListItemText primary={user} secondary={message} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteConversation(conversation.conversation.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
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
      {redirect && <Redirect to={{pathname: `/conversation/${conversationId}`, state: {userTo: userTo, userFrom: userFrom}}} />}
    </div>
  )
}

export default ViewMessages;