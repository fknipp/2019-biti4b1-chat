import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Messages from '../messages';

Meteor.methods({
  sendMessage({ text }) {
    check(text, String);

    if(!this.userId) {
      throw new Meteor.Error('not-logged-in', 'You are not logged in.')
    }

    const user = Meteor.users.findOne(this.userId);

    Messages.insert({
      text: text,
      author: user.emails[0].address,
      time: new Date()
    })
  }
})