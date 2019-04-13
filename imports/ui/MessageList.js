import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '../api/messages';

const Message = ({_id, author, text}) => (
  <li key={_id}>
    {author}: {text}
  </li>
)

const MessageList = (props) => (
  props.ready ?
    <ul>{ props.links.map(message => (<Message {...message}/>)) }</ul>
  :
    <h2>Wird geladen…</h2>
)

export default MessageListContainer = withTracker(() => {
  const handle = Meteor.subscribe('messages');
  return {
    ready: handle.ready(),
    links: Messages.find().fetch(),
  };
})(MessageList);