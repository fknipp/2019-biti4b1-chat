import { Meteor } from 'meteor/meteor';
import Links from '../links';
import Messages from '../messages';

Meteor.publish('all_links', () => {
  return Links.find();
})

Meteor.publish('messages', function() {
  return Messages.find();
})