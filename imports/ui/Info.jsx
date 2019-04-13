import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

const Link = ({_id, url, title}) => (
  <li key={_id}>
    <a href={url} target="_blank">{title}</a> ({url})
  </li>
)

const Info = (props) => (
  props.ready ?
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{ props.links.map(link => (<Link {...link}/>)) }</ul>
    </div> 
  :
    <h2>Wird geladen…</h2>
)

export default InfoContainer = withTracker(() => {
  const handle = Meteor.subscribe('all_links');
  return {
    ready: handle.ready(),
    links: Links.find().fetch(),
  };
})(Info);
