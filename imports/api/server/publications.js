import { Meteor } from 'meteor/meteor';
import Links from '../links';

Meteor.publish('all_links', () => {
  return Links.find();
})