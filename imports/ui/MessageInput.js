import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export default MessageInput = () => {

  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      Meteor.call('sendMessage', { text });
      setText('');
    }
  };

  return <div><input type="text" value={ text } onChange={ onChange } onKeyPress={ onKeyPress }/></div>
}