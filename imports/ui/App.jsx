import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';

const App = () => (
  <div>
    <AccountsUIWrapper />
    <h1>Welcome to Meteor!</h1>
    <Hello title="Lass uns zählen!"/>
    <Info />
  </div>
);

export default App;
