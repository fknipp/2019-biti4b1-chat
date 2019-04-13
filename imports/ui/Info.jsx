import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

const Link = ({_id, url, title}) => (
  <li key={_id}>
    <a href={url} target="_blank">{title}</a> ({url})
  </li>
)

const Info = (props) => (
  <div>
    <h2>Learn Meteor!</h2>
    <ul>{ props.links.map(link => (<Link {...link}/>)) }</ul>
  </div>
)

export default InfoContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);
